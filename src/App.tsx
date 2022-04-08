import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './styles/GlobalStyles';

import Home from './pages/Home';
import Pokedex from './pages/Pokedex';
import Pokemon from './pages/Pokemon';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokedex" element={<Pokedex />} />
        <Route path="/pokedex/pokemon/:pokemonId" element={<Pokemon />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
