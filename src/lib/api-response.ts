import { NextResponse } from "next/server";

export interface ApiResponsePayload<T = unknown> {
  success: boolean;
  message?: string;
  data?: T;
  errors?: unknown;
  timestamp: string;
}

export function successResponse<T>(
  data: T,
  message?: string,
  status = 200,
  headers: Record<string, string> = {}
): NextResponse<ApiResponsePayload<T>> {
  return NextResponse.json(
    {
      success: true,
      message,
      data,
      timestamp: new Date().toISOString(),
    },
    { status, headers }
  );
}

export function errorResponse(
  message: string,
  status = 500,
  errors: unknown = null,
  headers: Record<string, string> = {}
): NextResponse<ApiResponsePayload> {
  return NextResponse.json(
    {
      success: false,
      message,
      errors,
      timestamp: new Date().toISOString(),
    },
    { status, headers }
  );
}

export function validationErrorResponse(
  errors: unknown,
  status = 400
): NextResponse<ApiResponsePayload> {
  return errorResponse("Validation Failure", status, errors);
}
