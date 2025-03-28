import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import { ThemeProvider } from '@/components/ThemeContext';
import { AppProvider } from '@/context/AppContext';
import { ProtectedRoute } from '@/components/ProtectedRoute';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { HTTPErrorBoundary } from '@/components/HTTPErrorBoundary';
import Layout from '@/components/Layout';
import Dashboard from '@/pages/Dashboard';
import { UserForm } from '@/pages/UserForm';
import { Recommendations } from '@/pages/Recommendations';
import EcoChallenges from '@/pages/EcoChallenges';
import Login from '@/pages/Login';

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <AppProvider>
          <HTTPErrorBoundary>
            <BrowserRouter>
              <Routes>
                <Route path="/login" element={
                  <ProtectedRoute requireAuth={false}>
                    <Login />
                  </ProtectedRoute>
                } />
                
                <Route path="/" element={
                  <ProtectedRoute>
                    <Layout>
                      <Outlet />
                    </Layout>
                  </ProtectedRoute>
                }>
                  <Route index element={<Dashboard />} />
                  <Route path="profile" element={<UserForm />} />
                  <Route path="recommendations" element={<Recommendations />} />
                  <Route path="challenges" element={<EcoChallenges />} />
                </Route>
              </Routes>
            </BrowserRouter>
          </HTTPErrorBoundary>
        </AppProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
