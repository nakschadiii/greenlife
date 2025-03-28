import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const Nav = styled.nav`
  background: var(--bg-secondary);
  padding: var(--spacing-md);
  box-shadow: var(--shadow-sm);
`;

const NavContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  color: var(--primary-color);
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
`;

export function Navbar() {
  return (
    <Nav>
      <NavContent>
        <Logo to="/">Calculateur CO2</Logo>
      </NavContent>
    </Nav>
  );
} 