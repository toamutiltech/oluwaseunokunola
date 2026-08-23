export interface LogContext {
  componentStack?: string;
  digest?: string;
  [key: string]: unknown;
}

export interface LogEntry {
  level: "info" | "warn" | "error" | "debug";
  message: string;
  timestamp: string;
  metadata: Record<string, unknown>;
  error?: {
    name: string;
    message: string;
    stack?: string;
  };
}

export function formatLogEntry(
  level: LogEntry["level"],
  message: string,
  metadata?: Record<string, unknown>,
  err?: Error
): LogEntry {
  const entry: LogEntry = {
    level,
    message,
    timestamp: new Date().toISOString(),
    metadata: metadata || {},
  };

  if (err) {
    entry.error = {
      name: err.name,
      message: err.message,
      stack: err.stack,
    };
  }

  return entry;
}

export function logEvent(
  level: LogEntry["level"],
  message: string,
  metadata?: Record<string, unknown>
): LogEntry {
  const entry = formatLogEntry(level, message, metadata);
  const jsonString = JSON.stringify(entry);

  if (level === "error") {
    console.error(jsonString);
  } else if (level === "warn") {
    console.warn(jsonString);
  } else {
    console.log(jsonString);
  }

  return entry;
}

export function logInfo(message: string, metadata?: Record<string, unknown>): LogEntry {
  return logEvent("info", message, metadata);
}

export function logWarn(message: string, metadata?: Record<string, unknown>): LogEntry {
  return logEvent("warn", message, metadata);
}

export function logError(error: Error | string, context?: LogContext): LogEntry {
  const errObj = typeof error === "string" ? new Error(error) : error;
  const entry = formatLogEntry("error", errObj.message, context, errObj);
  console.error(JSON.stringify(entry));
  return entry;
}
