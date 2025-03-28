import React from 'react'
import ReactDOM from 'react-dom/client'
import { ErrorBoundary } from './components/ErrorBoundary'
import './styles/global.css'
import './styles/index.css'
import './styles/dashboard.css'
import './styles/forms.css'
import './styles/navigation.css'
import './styles/badge.css'
import './styles/challenges.css'
import './styles/recommendations.css'
import './styles/login.css'
import './styles/components.css'
import './styles/modal.css'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
)
