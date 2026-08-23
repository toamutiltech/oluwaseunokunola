interface RateLimitOptions {
  intervalMs?: number;
  maxRequests?: number;
}

interface RateLimitResult {
  success: boolean;
  remaining: number;
  limit: number;
  reset: number;
}

const tokenCache = new Map<string, number[]>();

/**
 * In-memory sliding window rate-limiter for API routes.
 */
export function checkRateLimit(
  identifier: string,
  options: RateLimitOptions = {}
): RateLimitResult {
  const intervalMs = options.intervalMs ?? 60_000; // default 1 minute
  const maxRequests = options.maxRequests ?? 10; // default 10 req/min
  const now = Date.now();

  const timestamps = tokenCache.get(identifier) ?? [];
  const validTimestamps = timestamps.filter((time) => now - time < intervalMs);

  if (validTimestamps.length >= maxRequests) {
    const oldestTimestamp = validTimestamps[0];
    const reset = oldestTimestamp + intervalMs;
    return {
      success: false,
      remaining: 0,
      limit: maxRequests,
      reset,
    };
  }

  validTimestamps.push(now);
  tokenCache.set(identifier, validTimestamps);

  return {
    success: true,
    remaining: maxRequests - validTimestamps.length,
    limit: maxRequests,
    reset: now + intervalMs,
  };
}

/**
 * Clear rate limit cache (useful for testing).
 */
export function resetRateLimitCache(): void {
  tokenCache.clear();
}
