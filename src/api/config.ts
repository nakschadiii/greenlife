export const API_CONFIG = {
  // En développement, on n'utilise pas d'API réelle
  IS_MOCK: false,
  BASE_URL: 'https://your-ngrok-url.ngrok.io',
  ENDPOINTS: {
    PREDICT: '/predict',
    USER: '/user',
    RECOMMENDATIONS: '/recommendations',
    CHALLENGES: '/challenges'
  }
}; 