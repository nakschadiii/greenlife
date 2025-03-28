import { Component, ErrorInfo, ReactNode } from 'react';
import { logService } from '@/services/logService';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    logService.error('Erreur non gérée:', error, errorInfo);
  }

  private handleRetry = () => {
    this.setState({ hasError: false, error: null });
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary">
          <div className="error-content">
            <h2>Une erreur est survenue</h2>
            <p>{this.state.error?.message}</p>
            <button onClick={this.handleRetry}>Réessayer</button>
          </div>
          <style jsx>{`
            .error-boundary {
              display: flex;
              align-items: center;
              justify-content: center;
              min-height: 100vh;
              padding: var(--spacing-lg);
              background: var(--bg-error);
            }

            .error-content {
              text-align: center;
              padding: var(--spacing-xl);
              background: var(--bg-primary);
              border-radius: var(--radius-lg);
              box-shadow: var(--shadow-lg);
            }

            button {
              margin-top: var(--spacing-md);
              padding: var(--spacing-sm) var(--spacing-lg);
              background: var(--primary-color);
              color: white;
              border: none;
              border-radius: var(--radius-md);
              cursor: pointer;
              transition: background 0.2s;
            }

            button:hover {
              background: var(--primary-dark);
            }
          `}</style>
        </div>
      );
    }

    return this.props.children;
  }
} 