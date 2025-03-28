import { motion } from 'framer-motion';
import { Alert } from '../../types';

const MOCK_ALERTS: Alert[] = [
  {
    id: '1',
    type: 'warning',
    message: 'Consommation électrique élevée détectée',
    timestamp: new Date()
  },
  {
    id: '2',
    type: 'success',
    message: 'Objectif de réduction atteint !',
    timestamp: new Date()
  },
  {
    id: '3',
    type: 'info',
    message: 'Nouveau défi disponible',
    timestamp: new Date()
  }
];

export function AlertsList() {
  return (
    <div className="alerts-container">
      <h3>Notifications</h3>
      {MOCK_ALERTS.map((alert) => (
        <motion.div
          key={alert.id}
          className={`alert-item alert-${alert.type}`}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <span className="alert-icon">
            {alert.type === 'warning' && '⚠️'}
            {alert.type === 'success' && '✅'}
            {alert.type === 'info' && 'ℹ️'}
          </span>
          <div className="alert-content">
            <p className="alert-message">{alert.message}</p>
            <span className="alert-timestamp">
              {alert.timestamp.toLocaleTimeString()}
            </span>
          </div>
        </motion.div>
      ))}
    </div>
  );
} 