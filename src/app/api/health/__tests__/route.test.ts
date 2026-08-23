import { describe, expect, it } from "vitest";
import { GET } from "../route";

describe("Health API Route", () => {
  it("returns status ok with timestamp and service details", async () => {
    const response = await GET();
    expect(response.status).toBe(200);

    const body = await response.json();
    expect(body.status).toBe("ok");
    expect(body.service).toBe("oluwaseun-portfolio");
    expect(typeof body.timestamp).toBe("string");
    expect(typeof body.uptime).toBe("number");
  });
});
