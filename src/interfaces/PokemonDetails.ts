import { Pokemon } from './Pokemon';

export interface IProps {
  pokemon: Pokemon;
  key: string;
}

export interface Abilities {
  ability: Pokemon;
}

export interface Sprites {
  back_default: string;
  back_female: string;
  back_shiny: string;
  back_shiny_female: string;
  front_default: string;
  front_female: string;
  front_shiny: string;
}

export interface Stats {
  base_stat: number;
  effort: number;
  stat: Pokemon;
}

export interface Types {
  type: Pokemon;
}

export interface PokemonDetails {
  id: number;
  weight: number;
  height: number;
}
