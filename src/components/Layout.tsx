import { ReactNode } from 'react';
import Navigation from './Navigation';
import { useTheme } from './ThemeContext';

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  const { theme } = useTheme();
  
  return (
    <div className={`app-container theme-${theme}`}>
      <Navigation />
      <main className="main-content">
        {children}
      </main>
    </div>
  );
}

export default Layout;