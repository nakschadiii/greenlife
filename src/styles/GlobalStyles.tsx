import { Global, css } from '@emotion/react';

export function GlobalStyles() {
  return (
    <Global
      styles={css`
        :root {
          --primary-color: #2563eb;
          --success: #22c55e;
          --error: #ef4444;
          --info: #3b82f6;
          
          --bg-primary: #f8fafc;
          --bg-secondary: #ffffff;
          --bg-input: #ffffff;
          
          --text-primary: #1e293b;
          --text-secondary: #64748b;
          
          --border-color: #e2e8f0;
          
          --spacing-xs: 4px;
          --spacing-sm: 8px;
          --spacing-md: 16px;
          --spacing-lg: 24px;
          --spacing-xl: 32px;
          
          --radius-sm: 4px;
          --radius-md: 6px;
          --radius-lg: 8px;
          
          --shadow-sm: 0 1px 3px rgba(0,0,0,0.1);
          --shadow-md: 0 4px 6px rgba(0,0,0,0.1);
        }

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 
                       Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', 
                       sans-serif;
          line-height: 1.5;
          color: var(--text-primary);
          background: var(--bg-primary);
        }

        h1, h2, h3, h4, h5, h6 {
          margin-bottom: var(--spacing-md);
        }

        button {
          cursor: pointer;
        }

        input, select {
          font-size: 1rem;
          font-family: inherit;
        }
      `}
    />
  );
} 