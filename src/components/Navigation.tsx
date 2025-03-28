import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTheme } from '@/components/ThemeContext';
import { useApp } from '@/context/AppContext';
import { authService } from '@/services/authService';
import { useGlobalError } from '@/hooks/useGlobalError';
import { useLoading } from '@/hooks/useLoading';

export default function Navigation() {
  const location = useLocation();
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();
  const { user, setUser } = useApp();
  const { handleError } = useGlobalError();
  const { withLoading } = useLoading();

  const handleLogout = async () => {
    try {
      await withLoading(authService.logout());
      setUser(null);
      navigate('/login');
    } catch (error) {
      handleError(error);
    }
  };

  const navItems = [
    { path: '/', label: 'Tableau de bord', icon: '📊' },
    { path: '/profile', label: 'Profil', icon: '👤' },
    { path: '/recommendations', label: 'Recommandations', icon: '💡' },
    { path: '/challenges', label: 'Défis', icon: '🎯' },
  ];

  return (
    <nav className="navigation">
      <div className="nav-content">
        <div className="nav-brand">
          <Link to="/">EcoTrack</Link>
        </div>

        <div className="nav-links">
          {navItems.map(item => (
            <Link
              key={item.path}
              to={item.path}
              className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
            >
              <span className="nav-icon">{item.icon}</span>
              <span className="nav-label">{item.label}</span>
              {location.pathname === item.path && (
                <motion.div
                  className="nav-indicator"
                  layoutId="nav-indicator"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </div>

        <div className="nav-actions">
          <button 
            onClick={toggleTheme}
            className="theme-toggle"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
          {user && (
            <button 
              onClick={handleLogout}
              className="logout-button"
            >
              Déconnexion
            </button>
          )}
        </div>
      </div>
    </nav>
  );
} 