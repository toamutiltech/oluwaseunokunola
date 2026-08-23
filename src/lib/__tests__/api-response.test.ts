import { describe, it, expect } from "vitest";
import {
  successResponse,
  errorResponse,
  validationErrorResponse,
} from "../api-response";

describe("api-response Utilities", () => {
  it("formats successful JSON response correctly", async () => {
    const res = successResponse({ status: "healthy" }, "Operational", 200);
    expect(res.status).toBe(200);
    const json = await res.json();
    expect(json.success).toBe(true);
    expect(json.message).toBe("Operational");
    expect(json.data.status).toBe("healthy");
    expect(json.timestamp).toBeDefined();
  });

  it("formats error JSON response with custom HTTP status code", async () => {
    const res = errorResponse("Resource Not Found", 404);
    expect(res.status).toBe(404);
    const json = await res.json();
    expect(json.success).toBe(false);
    expect(json.message).toBe("Resource Not Found");
  });

  it("formats validation error response with 400 Bad Request status", async () => {
    const res = validationErrorResponse([{ field: "email", message: "Invalid" }]);
    expect(res.status).toBe(400);
    const json = await res.json();
    expect(json.success).toBe(false);
    expect(json.message).toBe("Validation Failure");
    expect(json.errors[0].field).toBe("email");
  });
});
