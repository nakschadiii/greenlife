export const ENV = {
  API_URL: import.meta.env.VITE_API_URL || 'http://localhost:3000/api',
  NODE_ENV: import.meta.env.MODE,
  IS_DEV: import.meta.env.DEV,
  IS_PROD: import.meta.env.PROD,
};

export const APP_CONFIG = {
  APP_NAME: 'EcoTrack',
  APP_VERSION: '1.0.0',
  API_TIMEOUT: 10000,
  TOKEN_KEY: 'auth_token',
  USER_KEY: 'user_data',
  THEME_KEY: 'app_theme',
}; 