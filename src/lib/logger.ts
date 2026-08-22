export interface LogContext {
  componentStack?: string;
  digest?: string;
  [key: string]: unknown;
}

export function logError(error: Error, context?: LogContext): void {
  const timestamp = new Date().toISOString();
  const payload = {
    timestamp,
    name: error.name,
    message: error.message,
    stack: error.stack,
    context: context || {},
  };

  if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test') {
    console.error(`[LOGGER ${timestamp}] ${error.name}: ${error.message}`, payload);
  } else {
    // Structured log payload ready for Sentry/Datadog integration
    console.error(JSON.stringify(payload));
  }
}
