import { describe, it, expect, vi, beforeEach } from "vitest";
import { logError } from "../logger";

describe("Logger Utility", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it("formats and logs error objects via console.error", () => {
    const spy = vi.spyOn(console, "error").mockImplementation(() => {});
    const testError = new Error("Test runtime failure");

    logError(testError, { userId: "123" });

    expect(spy).toHaveBeenCalledWith(
      expect.stringContaining("Test runtime failure"),
      expect.objectContaining({
        name: "Error",
        message: "Test runtime failure",
        context: { userId: "123" },
      })
    );
  });
});
