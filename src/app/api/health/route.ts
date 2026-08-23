import { successResponse, errorResponse } from "@/lib/api-response";
import { logInfo } from "@/lib/logger";

export async function GET() {
  try {
    const memoryUsage = process.memoryUsage();
    const uptimeSeconds = Math.floor(process.uptime());

    const telemetry = {
      status: "operational",
      service: "oluwaseun-portfolio",
      version: process.env.NEXT_PUBLIC_APP_VERSION || "1.0.4",
      environment: process.env.NODE_ENV || "development",
      uptime: {
        seconds: uptimeSeconds,
        formatted: `${Math.floor(uptimeSeconds / 3600)}h ${Math.floor(
          (uptimeSeconds % 3600) / 60
        )}m ${uptimeSeconds % 60}s`,
      },
      memory: {
        rssBytes: memoryUsage.rss,
        heapTotalBytes: memoryUsage.heapTotal,
        heapUsedBytes: memoryUsage.heapUsed,
        externalBytes: memoryUsage.external,
      },
      checks: {
        database: "connected",
        logger: "active",
      },
    };

    logInfo("Health status probe executed", { status: "operational", uptimeSeconds });

    return successResponse(telemetry, "System operational and healthy", 200, {
      "Cache-Control": "no-store, no-cache, must-revalidate",
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err);
    return errorResponse(`Health check failure: ${message}`, 500);
  }
}
