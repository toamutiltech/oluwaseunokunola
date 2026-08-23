import { describe, it, expect, vi, beforeEach } from "vitest";
import { logError, logInfo, logWarn, logEvent, formatLogEntry } from "../logger";

describe("Logger Utility", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it("formats log entries with level, message, timestamp, and metadata", () => {
    const entry = formatLogEntry("info", "Application initialized", { env: "test" });

    expect(entry.level).toBe("info");
    expect(entry.message).toBe("Application initialized");
    expect(typeof entry.timestamp).toBe("string");
    expect(entry.metadata).toEqual({ env: "test" });
  });

  it("emits structured JSON log string via console.error for logError", () => {
    const spy = vi.spyOn(console, "error").mockImplementation(() => {});
    const testError = new Error("Database connection timeout");

    const entry = logError(testError, { component: "API" });

    expect(spy).toHaveBeenCalled();
    const emittedJson = JSON.parse(spy.mock.calls[0][0]);
    expect(emittedJson.level).toBe("error");
    expect(emittedJson.message).toBe("Database connection timeout");
    expect(emittedJson.metadata).toEqual({ component: "API" });
    expect(emittedJson.error.name).toBe("Error");
    expect(entry.level).toBe("error");
  });

  it("emits structured JSON log lines for info and warn events", () => {
    const logSpy = vi.spyOn(console, "log").mockImplementation(() => {});
    const warnSpy = vi.spyOn(console, "warn").mockImplementation(() => {});

    logInfo("User session started", { userId: "usr_42" });
    logWarn("High latency detected", { durationMs: 450 });

    expect(logSpy).toHaveBeenCalled();
    const infoPayload = JSON.parse(logSpy.mock.calls[0][0]);
    expect(infoPayload.level).toBe("info");
    expect(infoPayload.message).toBe("User session started");

    expect(warnSpy).toHaveBeenCalled();
    const warnPayload = JSON.parse(warnSpy.mock.calls[0][0]);
    expect(warnPayload.level).toBe("warn");
    expect(warnPayload.message).toBe("High latency detected");
  });
});
