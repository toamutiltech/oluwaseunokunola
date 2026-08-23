import { NextRequest } from "next/server";
import { contactFormSchema } from "@/lib/validation";
import { checkRateLimit } from "@/lib/rate-limit";
import {
  successResponse,
  errorResponse,
  validationErrorResponse,
} from "@/lib/api-response";
import { logInfo, logError } from "@/lib/logger";

export async function POST(request: NextRequest) {
  try {
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
      request.headers.get("x-real-ip") ||
      "127.0.0.1";

    const rateLimit = checkRateLimit(`contact-api:${ip}`, {
      maxRequests: 5,
      intervalMs: 60_000,
    });

    if (!rateLimit.success) {
      logError("Rate limit exceeded for contact API route", { ip });
      return errorResponse(
        "Too many contact inquiries submitted. Please wait a minute before trying again.",
        429
      );
    }

    let body: unknown;
    try {
      body = await request.json();
    } catch {
      return errorResponse("Invalid or malformed JSON payload", 400);
    }

    const validation = contactFormSchema.safeParse(body);
    if (!validation.success) {
      return validationErrorResponse(validation.error.flatten(), 400);
    }

    const { name, email, message } = validation.data;

    logInfo("Contact form inquiry received via API route", {
      name,
      email,
      messageLength: message.length,
    });

    return successResponse(
      {
        submittedAt: new Date().toISOString(),
        referenceId: `CF-${Date.now().toString(36).toUpperCase()}`,
      },
      "Thank you! Your message has been safely logged.",
      201
    );
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : String(err);
    logError("Unhandled exception in /api/contact route", { error: errorMessage });
    return errorResponse("Internal server error handling contact submission", 500);
  }
}
