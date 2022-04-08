import React from 'react';
import { Container } from './styled';

import NavBar from '../../components/NavBar';
import Pokemon from '../../components/Pokemon';

function Pokedex() {
  return (
    <Container>
      <NavBar />
      <Pokemon />
    </Container>
  );
}

export default Pokedex;
