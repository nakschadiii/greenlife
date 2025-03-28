import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const ErrorContainer = styled(motion.div)`
  background: var(--error-bg);
  border: 1px solid var(--error);
  border-radius: var(--radius-md);
  padding: var(--spacing-md);
  margin: var(--spacing-md) 0;
  color: var(--error);
`;

const RetryButton = styled.button`
  background: var(--error);
  color: white;
  border: none;
  border-radius: var(--radius-sm);
  padding: var(--spacing-sm) var(--spacing-md);
  margin-top: var(--spacing-sm);
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: var(--error-dark);
  }
`;

interface ErrorMessageProps {
  message: string;
  onRetry?: () => void;
}

export function ErrorMessage({ message, onRetry }: ErrorMessageProps) {
  return (
    <ErrorContainer
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
    >
      <p>{message}</p>
      {onRetry && (
        <RetryButton onClick={onRetry}>
          Réessayer
        </RetryButton>
      )}
    </ErrorContainer>
  );
} 