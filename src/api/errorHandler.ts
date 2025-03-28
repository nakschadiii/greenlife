import { AppError } from '@/utils/errorHandler';

export class APIError extends AppError {
  constructor(message: string, status: number) {
    super(message, 'API_ERROR', status);
  }
}

export function handleAPIError(error: unknown): never {
  if (error instanceof APIError) {
    throw error;
  }

  if (error instanceof Response) {
    throw new APIError(
      'Erreur de communication avec le serveur',
      error.status
    );
  }

  if (error instanceof Error) {
    throw new APIError(error.message, 500);
  }

  throw new APIError('Une erreur inattendue est survenue', 500);
} 