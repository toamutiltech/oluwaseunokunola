import { describe, it, expect, beforeEach } from "vitest";
import { checkRateLimit, resetRateLimitCache } from "../rate-limit";

describe("rate-limit Utility", () => {
  beforeEach(() => {
    resetRateLimitCache();
  });

  it("allows requests under the rate limit threshold", () => {
    const res1 = checkRateLimit("client-123", { maxRequests: 3 });
    expect(res1.success).toBe(true);
    expect(res1.remaining).toBe(2);

    const res2 = checkRateLimit("client-123", { maxRequests: 3 });
    expect(res2.success).toBe(true);
    expect(res2.remaining).toBe(1);
  });

  it("blocks requests when rate limit threshold is exceeded", () => {
    checkRateLimit("client-456", { maxRequests: 2 });
    checkRateLimit("client-456", { maxRequests: 2 });

    const blockedRes = checkRateLimit("client-456", { maxRequests: 2 });
    expect(blockedRes.success).toBe(false);
    expect(blockedRes.remaining).toBe(0);
  });
});
