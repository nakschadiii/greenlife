import { motion } from 'framer-motion';

export default function Login() {
  return (
    <motion.div 
      className="login-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="login-card">
        <h1>Connexion</h1>
        {import.meta.env.DEV && (
          <div className="dev-info">
            <p>Mode développement</p>
            <p>Email: demo@example.com</p>
            <p>Mot de passe: demo123</p>
          </div>
        )}
        {/* ... reste du formulaire ... */}
      </div>
    </motion.div>
  );
} 