import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '@/hooks/useApp';
import { useForm } from '@/hooks/useForm';
import { User } from '@/types';
import { useNotification } from '@/hooks/useNotification';

interface UserFormData extends Omit<User, 'id'> {
  password?: string;
  confirmPassword?: string;
}

export function UserForm() {
  const navigate = useNavigate();
  const { user, setUser } = useApp();
  const { addNotification } = useNotification();
  const [isEditing, setIsEditing] = useState(false);

  const { values, handleChange, handleSubmit, errors } = useForm<UserFormData>({
    initialValues: {
      name: user?.name || '',
      email: user?.email || '',
      ecoScore: user?.ecoScore || 0,
      password: '',
      confirmPassword: ''
    },
    onSubmit: async (formData) => {
      try {
        // Logique de mise à jour du profil
        addNotification('Profil mis à jour avec succès', 'success');
        setIsEditing(false);
      } catch (error) {
        addNotification('Erreur lors de la mise à jour du profil', 'error');
      }
    }
  });

  return (
    <div className="user-form">
      <h2>Profil Utilisateur</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nom</label>
          <input
            type="text"
            id="name"
            name="name"
            value={values.name}
            onChange={handleChange}
            disabled={!isEditing}
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            disabled={!isEditing}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>

        {isEditing && (
          <>
            <div className="form-group">
              <label htmlFor="password">Nouveau mot de passe</label>
              <input
                type="password"
                id="password"
                name="password"
                value={values.password}
                onChange={handleChange}
              />
              {errors.password && <span className="error">{errors.password}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="confirmPassword">Confirmer le mot de passe</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={values.confirmPassword}
                onChange={handleChange}
              />
              {errors.confirmPassword && (
                <span className="error">{errors.confirmPassword}</span>
              )}
            </div>
          </>
        )}

        <div className="form-actions">
          {!isEditing ? (
            <button
              type="button"
              onClick={() => setIsEditing(true)}
              className="edit-button"
            >
              Modifier
            </button>
          ) : (
            <>
              <button type="submit" className="save-button">
                Enregistrer
              </button>
              <button
                type="button"
                onClick={() => setIsEditing(false)}
                className="cancel-button"
              >
                Annuler
              </button>
            </>
          )}
        </div>
      </form>
    </div>
  );
} 