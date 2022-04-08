import React, { useState, useEffect } from 'react';
import { Pagination } from '@mui/material';
import api from '../../services/api';
import { numberOfPages, pokemonPerPage } from '../../utils/utils';

import { PaginationContainer, PokeList } from './styled';
import { Pokemon } from '../../interfaces/Pokemon';

import { Pokeball } from '../Spinner';
import Search from '../Search';
import PokemonCard from '../PokemonCard';

const PokemonList = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [pokemons, setPokemons] = useState([]);
  const [search, setSearch] = useState('');

  const onPaginationClick = (
    event: React.ChangeEvent<unknown>,
    value: number,
  ) => {
    setCurrentPage(value * pokemonPerPage - pokemonPerPage);
  };

  const renderList = () => {
    const pokemonList: Array<JSX.Element> = [];

    pokemons.forEach((pokemon: Pokemon) => {
      if (!pokemon.name.includes(search)) return;

      pokemonList.push(<PokemonCard key={pokemon.name} pokemon={pokemon} />);
    });

    return pokemonList;
  };

  useEffect(() => {
    const fetchPokemons = async () => {
      await api
        .get(`/pokemon?limit=${pokemonPerPage}&offset=${currentPage}`)
        .then((response) => {
          setPokemons(response.data.results);
        });

      setIsLoading(false);
    };

    fetchPokemons();
  }, [currentPage, pokemonPerPage]);

  return isLoading ? (
    <Pokeball />
  ) : (
    <>
      <Search setSearch={setSearch} />
      <PaginationContainer>
        <Pagination
          defaultPage={1}
          count={numberOfPages()}
          variant="outlined"
          shape="rounded"
          onChange={onPaginationClick}
        />
      </PaginationContainer>

      <PokeList>{renderList()}</PokeList>
    </>
  );
};

export default PokemonList;
