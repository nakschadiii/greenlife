import { useReducedMotion } from 'framer-motion';

export const useAnimations = () => {
  const shouldReduceMotion = useReducedMotion();

  const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: shouldReduceMotion ? 0 : 0.3 }
  };

  const slideUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: shouldReduceMotion ? 0 : 0.3 }
  };

  const scale = {
    initial: { scale: 0.9, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0.9, opacity: 0 },
    transition: { type: 'spring', stiffness: 300, damping: 30 }
  };

  return {
    fadeIn,
    slideUp,
    scale,
    shouldReduceMotion
  };
}; 