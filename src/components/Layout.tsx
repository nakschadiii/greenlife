import styled from '@emotion/styled';
import { Outlet } from 'react-router-dom';

const LayoutContainer = styled.div`
  min-height: 100vh;
  background: var(--bg-primary);
`;

const MainContent = styled.main`
  padding-top: var(--spacing-xl);
`;

export function Layout() {
  return (
    <LayoutContainer>
      <MainContent>
        <Outlet />
      </MainContent>
    </LayoutContainer>
  );
}

export default Layout;