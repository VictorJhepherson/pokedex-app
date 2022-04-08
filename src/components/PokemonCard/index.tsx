import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import { getName, mapTypes } from '../../utils/utils';

import {
  Card,
  StyledLink,
  CardName,
  CardImg,
  CardDetails,
  CardId,
} from './styled';
import { Sprites, Types, IProps } from '../../interfaces/PokemonDetails';

import { PokeballMini } from '../Spinner';

const PokemonCard = (props: IProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [imageLoading, setImageLoading] = useState(true);

  const [imagesPokemon, setImagesPokemon] = useState({} as Sprites);
  const [pokemonId, setPokemonId] = useState(0);
  const [pokemonTypes, setPokemonTypes] = useState<Array<Types>>([]);

  const pokemonName = getName(props.pokemon.name);
  const pokemonType = mapTypes(pokemonTypes);

  useEffect(() => {
    const getPokemon = async () => {
      await api.get(props.pokemon.url).then((response) => {
        setPokemonId(response.data.id);
        setPokemonTypes(response.data.types);
        setImagesPokemon(response.data.sprites);
      });
    };

    getPokemon();

    setIsLoading(false);
  }, [props.pokemon.url, pokemonId]);

  if (isLoading) return <PokeballMini />;
  else if (pokemonId > 807) return <div></div>;
  else {
    return (
      <StyledLink to={`pokemon/${pokemonId}`}>
        <Card className={pokemonType[0]}>
          <CardId className={pokemonType[0]}># {pokemonId}</CardId>
          {imageLoading ? <PokeballMini /> : null}
          <CardImg
            onLoad={() => {
              setImageLoading(false);
            }}
            src={imagesPokemon.front_default}
            alt={pokemonName}
          />
          <CardName>{pokemonName}</CardName>
          <CardDetails>{pokemonType.join(' / ')}</CardDetails>
        </Card>
      </StyledLink>
    );
  }
};

export default PokemonCard;
