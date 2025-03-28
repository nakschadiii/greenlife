import { API_CONFIG } from '@/config/api.config';

type LogLevel = 'debug' | 'info' | 'warn' | 'error';

class LogService {
  private readonly IS_DEV = API_CONFIG.IS_MOCK;

  private formatMessage(level: LogLevel, message: string, data?: any): string {
    const timestamp = new Date().toISOString();
    const dataString = data ? `\nData: ${JSON.stringify(data, null, 2)}` : '';
    return `[${timestamp}] ${level.toUpperCase()}: ${message}${dataString}`;
  }

  debug(message: string, data?: any): void {
    if (this.IS_DEV) {
      console.debug(this.formatMessage('debug', message, data));
    }
  }

  info(message: string, data?: any): void {
    if (this.IS_DEV) {
      console.info(this.formatMessage('info', message, data));
    }
  }

  warn(message: string, data?: any): void {
    if (this.IS_DEV) {
      console.warn(this.formatMessage('warn', message, data));
    }
  }

  error(message: string, error?: Error, data?: any): void {
    if (this.IS_DEV) {
      console.error(this.formatMessage('error', message, { error, data }));
    }
  }

  group(label: string): void {
    if (this.IS_DEV) {
      console.group(label);
    }
  }

  groupEnd(): void {
    if (this.IS_DEV) {
      console.groupEnd();
    }
  }
}

export const logService = new LogService(); 