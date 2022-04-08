import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import { NavBarStyles, BackContainer } from './styled';
import Logo from '../Logo';

const NavBar = () => {
  const localtion = useLocation();

  return (
    <NavBarStyles>
      <BackContainer>
        <Link to={localtion.pathname === '/pokedex' ? '/' : '/pokedex'}>
          <h2>
            <i className="arrow circle left icon" />
          </h2>
        </Link>
      </BackContainer>
      <Logo size="small" />
    </NavBarStyles>
  );
};

export default NavBar;
