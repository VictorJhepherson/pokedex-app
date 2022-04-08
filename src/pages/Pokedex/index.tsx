import React from 'react';
import { Container } from './styled';

import NavBar from '../../components/NavBar';
import PokemonList from '../../components/PokemonList';

function Pokedex() {
  return (
    <Container>
      <NavBar />
      <PokemonList />
    </Container>
  );
}

export default Pokedex;
