export const API_CONFIG = {
  IS_MOCK: false, //import.meta.env.DEV || !import.meta.env.VITE_API_URL,
  BASE_URL: import.meta.env.VITE_API_URL || 'http://localhost:3000/api',
  MOCK_DELAY: 1000, // délai de simulation en ms
}; 