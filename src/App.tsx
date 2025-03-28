import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import ConsumptionPage from '@/pages/ConsumptionPage';
import { NotificationContainer } from '@/components/NotificationContainer';
import { GlobalStyles } from '@/styles/GlobalStyles';

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<ConsumptionPage />} />
          </Routes>
        </Layout>
        <NotificationContainer />
      </BrowserRouter>
    </>
  );
}

export default App;
