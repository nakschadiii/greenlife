export const PROJECT_STRUCTURE = {
  src: {
    api: {
      // Configuration et gestion des appels API
      'config.ts': 'Configuration de l\'API',
      'errorHandler.ts': 'Gestion des erreurs API'
    },
    components: {
      common: {
        // Composants réutilisables
        'ErrorBoundary.tsx': 'Gestion globale des erreurs',
        'LoadingSpinner.tsx': 'Indicateur de chargement',
        'Modal.tsx': 'Fenêtre modale réutilisable',
        'Notification.tsx': 'Système de notifications'
      },
      forms: {
        // Composants de formulaire
        'AppliancesSection.tsx': 'Section équipements',
        'HousingSection.tsx': 'Section logement'
      },
      layout: {
        // Composants de mise en page
        'Layout.tsx': 'Layout principal',
        'Navigation.tsx': 'Barre de navigation'
      }
    },
    hooks: {
      // Hooks personnalisés
      'useConsumption.ts': 'Gestion de la consommation',
      'useForm.ts': 'Gestion des formulaires',
      'useNotification.ts': 'Gestion des notifications'
    },
    services: {
      // Services de l'application
      'authService.ts': 'Service d\'authentification',
      'consumptionService.ts': 'Service de consommation',
      'logService.ts': 'Service de logging'
    },
    types: {
      // Types TypeScript
      'index.ts': 'Export des types',
      'consumption.ts': 'Types liés à la consommation'
    },
    utils: {
      // Utilitaires
      'errorHandler.ts': 'Gestion des erreurs',
      'validation.ts': 'Validation des données'
    }
  }
}; 