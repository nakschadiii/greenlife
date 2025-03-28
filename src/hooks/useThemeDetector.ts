import { useState, useEffect } from 'react';

export function useThemeDetector() {
  const getCurrentTheme = () => window.matchMedia("(prefers-color-scheme: dark)").matches;
  
  const [isDarkTheme, setIsDarkTheme] = useState(getCurrentTheme());
  
  useEffect(() => {
    const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
    const mqListener = (e: MediaQueryListEvent) => {
      setIsDarkTheme(e.matches);
    };
    
    darkThemeMq.addListener(mqListener);
    return () => darkThemeMq.removeListener(mqListener);
  }, []);

  return isDarkTheme;
} 