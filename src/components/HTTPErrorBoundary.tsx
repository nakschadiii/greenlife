import { Component, ErrorInfo, ReactNode } from 'react';
import { APIError } from '@/api/errorHandler';
import { ErrorMessage } from './ErrorMessage';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  error: APIError | null;
}

export class HTTPErrorBoundary extends Component<Props, State> {
  state: State = {
    error: null
  };

  static getDerivedStateFromError(error: unknown): State {
    if (error instanceof APIError) {
      return { error };
    }
    return { error: new APIError('Une erreur inattendue est survenue', 500) };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Erreur HTTP:', error, errorInfo);
  }

  render() {
    const { error } = this.state;
    const { children, fallback } = this.props;

    if (error) {
      if (error.status === 401) {
        // Redirection vers la page de connexion
        window.location.href = '/login';
        return null;
      }

      if (fallback) {
        return fallback;
      }

      return (
        <ErrorMessage
          message={error.message}
          onRetry={() => {
            this.setState({ error: null });
            window.location.reload();
          }}
        />
      );
    }

    return children;
  }
} 