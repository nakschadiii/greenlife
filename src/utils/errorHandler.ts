type ErrorWithMessage = {
  message: string;
  code?: string;
  status?: number;
};

export class AppError extends Error {
  code: string;
  status: number;

  constructor(message: string, code = 'UNKNOWN_ERROR', status = 500) {
    super(message);
    this.code = code;
    this.status = status;
  }
}

export function isErrorWithMessage(error: unknown): error is ErrorWithMessage {
  return (
    typeof error === 'object' &&
    error !== null &&
    'message' in error &&
    typeof (error as Record<string, unknown>).message === 'string'
  );
}

export function toErrorWithMessage(maybeError: unknown): ErrorWithMessage {
  if (isErrorWithMessage(maybeError)) return maybeError;

  try {
    return new Error(JSON.stringify(maybeError));
  } catch {
    return new Error(String(maybeError));
  }
}

export function getErrorMessage(error: unknown) {
  return toErrorWithMessage(error).message;
} 