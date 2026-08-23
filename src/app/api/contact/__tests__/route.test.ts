import { describe, it, expect, beforeEach } from "vitest";
import { NextRequest } from "next/server";
import { POST } from "../route";
import { resetRateLimitCache } from "@/lib/rate-limit";

describe("Contact API Route (/api/contact)", () => {
  beforeEach(() => {
    resetRateLimitCache();
  });

  it("returns 201 Created on valid contact form submission", async () => {
    const req = new NextRequest("http://localhost:3000/api/contact", {
      method: "POST",
      body: JSON.stringify({
        name: "Oluwaseun Okunola",
        email: "test@toamultitech.tech",
        message: "Hello! Interested in full-stack dev services.",
      }),
    });

    const res = await POST(req);
    expect(res.status).toBe(201);
    const json = await res.json();
    expect(json.success).toBe(true);
    expect(json.data.referenceId).toMatch(/^CF-/);
  });

  it("returns 400 Bad Request when validation fails", async () => {
    const req = new NextRequest("http://localhost:3000/api/contact", {
      method: "POST",
      body: JSON.stringify({
        name: "A",
        email: "not-an-email",
        message: "Short",
      }),
    });

    const res = await POST(req);
    expect(res.status).toBe(400);
    const json = await res.json();
    expect(json.success).toBe(false);
    expect(json.message).toBe("Validation Failure");
  });

  it("returns 429 Too Many Requests when rate limit is exceeded", async () => {
    for (let i = 0; i < 5; i++) {
      const validReq = new NextRequest("http://localhost:3000/api/contact", {
        method: "POST",
        headers: { "x-forwarded-for": "192.168.1.50" },
        body: JSON.stringify({
          name: "Rate Test User",
          email: "ratetest@example.com",
          message: "Testing rate limit threshold implementation.",
        }),
      });
      await POST(validReq);
    }

    const rateExceededReq = new NextRequest(
      "http://localhost:3000/api/contact",
      {
        method: "POST",
        headers: { "x-forwarded-for": "192.168.1.50" },
        body: JSON.stringify({
          name: "Rate Test User",
          email: "ratetest@example.com",
          message: "Testing rate limit threshold implementation.",
        }),
      }
    );

    const res = await POST(rateExceededReq);
    expect(res.status).toBe(429);
    const json = await res.json();
    expect(json.message).toContain("Too many contact inquiries");
  });
});
