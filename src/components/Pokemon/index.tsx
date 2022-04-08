import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  mapAbilities,
  mapTypes,
  mapBaseStats,
  baseStatsName,
} from '../../utils/utils';
import {
  Abilities,
  Types,
  PokemonDetails,
  Sprites,
  Stats,
} from '../../interfaces/PokemonDetails';
import api from '../../services/api';
import { Pokeball } from '../Spinner';
import {
  Container,
  Name,
  Information,
  Left,
  Center,
  Right,
  Title,
  Info,
  Image,
  Badge,
} from './styled';

const PokemonApp = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [imageLoading, setImageLoading] = useState(true);
  const { pokemonId } = useParams();

  const [pokemon, setPokemon] = useState({} as PokemonDetails);
  const [name, setName] = useState('');
  const [abilities, setAbilities] = useState<Array<Abilities>>([]);
  const [types, setTypes] = useState<Array<Types>>([]);
  const [sprites, setSprites] = useState({} as Sprites);
  const [stats, setStats] = useState<Array<Stats>>([]);

  const pokemonAbilities = mapAbilities(abilities);
  const pokemonTypes = mapTypes(types);
  const pokemonStats = mapBaseStats(stats);

  const renderAbilities = () => {
    const abilitiesList: Array<JSX.Element> = [];

    pokemonAbilities.forEach((ability, index) => {
      abilitiesList.push(
        <Badge
          key={index}
          className={`ability ${pokemonTypes[0]}`}
          style={{
            whiteSpace: 'nowrap',
            display: 'inline-block',
            boxShadow: 'none',
            marginBottom: '10px',
          }}
        >
          {ability}
        </Badge>,
      );
    });

    return abilitiesList;
  };

  const renderTypes = () => {
    const typesList: Array<JSX.Element> = [];

    pokemonTypes.forEach((type, index) => {
      typesList.push(
        <Badge
          key={index}
          className={`types ${type}`}
          style={{
            whiteSpace: 'nowrap',
            display: 'inline-block',
            boxShadow: 'none',
            marginBottom: '10px',
          }}
        >
          {type}
        </Badge>,
      );
    });

    return typesList;
  };

  const renderStats = () => {
    const statsList: Array<JSX.Element> = [];

    pokemonStats.forEach((stat, index) => {
      statsList.push(
        <tr key={index}>
          <Title>{baseStatsName[index]}</Title>
          <Info>
            <div className={`progress`}>
              <Badge
                className={`progress-bar ${pokemonTypes[0]}`}
                style={{
                  width: `${stat}%`,
                }}
              >
                <span>{stat}</span>
              </Badge>
            </div>
          </Info>
        </tr>,
      );
    });

    return statsList;
  };

  useEffect(() => {
    const getPokemon = async () => {
      await api.get(`pokemon/${pokemonId}`).then((response) => {
        const { id, name, weight, height, abilities, types, sprites, stats } =
          response.data;

        setPokemon({ id, weight, height });
        setName(name);
        setAbilities(abilities);
        setTypes(types);
        setSprites(sprites);
        setStats(stats);
      });
    };

    getPokemon();
    setIsLoading(false);
  }, [pokemonId]);

  return isLoading ? (
    <Pokeball />
  ) : (
    <Container>
      <Name>{name.toUpperCase()}</Name>
      <Information>
        <Left>
          <table cellSpacing={10}>
            <tbody>
              <tr>
                <Title>ID</Title>
                <Info># {pokemon.id}</Info>
              </tr>
              <tr>
                <Title>Height</Title>
                <Info>{pokemon.height / 10} Mt</Info>
              </tr>
              <tr>
                <Title>Weight</Title>
                <Info>{pokemon.weight / 10} Kg</Info>
              </tr>
              <tr>
                <Title>Abilities</Title>
                <Info>{renderAbilities()}</Info>
              </tr>
              <tr>
                <Title>Type</Title>
                <Info>{renderTypes()}</Info>
              </tr>
            </tbody>
          </table>
        </Left>

        <Center>
          {imageLoading ? <Pokeball /> : null}
          <Image
            onLoad={() => {
              setImageLoading(false);
            }}
            src={sprites.front_default}
            alt={name}
          />
        </Center>

        <Right>
          <table cellSpacing={10}>
            <tbody>{renderStats()}</tbody>
          </table>
        </Right>
      </Information>
    </Container>
  );
};

export default PokemonApp;
