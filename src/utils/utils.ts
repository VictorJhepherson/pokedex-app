import { Abilities, Stats, Types } from '../interfaces/PokemonDetails';

export const totalPokemon = 807;
export const pokemonPerPage = 54;

export const fadeInUp = {
  initial: {
    y: -40,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
  },
};

export const baseStatsName = [
  'HP',
  'Attack',
  'Defense',
  'Special A',
  'Special D',
  'Speed',
];

export function getName(name: string) {
  return name.split('-')[0];
}

export const numberOfPages = () => {
  return Math.ceil(totalPokemon / pokemonPerPage);
};

export const mapTypes = (types: Array<Types>) => {
  const list: Array<string> = [];
  types.map((item) => {
    list.push(item.type.name[0].toUpperCase() + item.type.name.slice(1));
  });

  return list;
};

export const mapAbilities = (abilities: Array<Abilities>) => {
  const list: Array<string> = [];
  abilities.map((item) => {
    list.push(item.ability.name[0].toUpperCase() + item.ability.name.slice(1));
  });

  return list;
};

export const mapBaseStats = (stats: Array<Stats>) => {
  const list: Array<number> = [];

  stats.map((stat) => {
    list.push(stat.base_stat);
  });

  return list;
};

export const mapStats = (stats: Array<Stats>) => {
  const list: Array<string> = [];

  stats
    .filter((stat) => {
      if (stat.effort > 0) return true;

      return false;
    })
    .map((stat) => {
      list.push(
        `${stat.effort} ${stat.stat.name
          .toLowerCase()
          .split('-')
          .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
          .join(' ')}`,
      );
    })
    .join(', ');

  return list;
};
