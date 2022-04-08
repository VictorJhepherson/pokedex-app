import styled from 'styled-components';
import theme from '../../styles/theme';
import { Link } from 'react-router-dom';

export const CardName = styled.h1`
  text-transform: capitalize;
  font-size: 2rem;
  font-weight: 700;
  width: 170px;
  color: ${theme.colors.darkBlue};
`;

export const CardImg = styled.img`
  width: 100px;
  margin: auto;
`;

export const CardDetails = styled.span`
  font-size: 1.3rem;
  color: ${theme.colors.ternary};
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  margin: 0.3rem;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

export const Card = styled.div`
  width: 12rem auto;
  background: #ecf0f1;
  color: #e4c439;
  padding: 1rem;
  border-radius: 10px;
  border: 1px solid;
  text-align: center;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  position: relative;
  overflow: hidden;
  transition: 0.5s ease-in-out all;
  -webkit-transition: 0.5s ease-out;
  -moz-transition: 0.5s ease-out;
  -o-transition: 0.5s ease-out;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
    color: #fff;
    overflow: hidden;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    -moz-osx-font-smoothing: grayscale;
    position: relative;
    -webkit-transition: color 0.2s;
    transition: color 0.2s;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
  }
  &:before {
    content: '';
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #ecf0f1;
    border-radius: 100%;
    -webkit-transform: scale(2);
    transform: scale(2);
    -webkit-transition-property: transform;
    transition-property: transform;
    -webkit-transition: 0.5s ease-out;
    transition: 0.5s ease-out;
  }
  &:hover:before {
    -webkit-transform: scale(0);
    transform: scale(0);
  }
  &.Normal {
    border-color: ${theme.typeColors.normal.border};
    &:hover {
      background-color: ${theme.typeColors.normal.background};
    }
  }
  &.Fire {
    border-color: ${theme.typeColors.fire.border};
    &:hover {
      background-color: ${theme.typeColors.fire.background};
    }
  }
  &.Water {
    border-color: ${theme.typeColors.water.border};
    &:hover {
      background-color: ${theme.typeColors.water.background};
    }
  }
  &.Electric {
    border-color: ${theme.typeColors.electric.border};
    &:hover {
      background-color: ${theme.typeColors.electric.background};
    }
  }
  &.Grass {
    border-color: ${theme.typeColors.grass.border};
    &:hover {
      background-color: ${theme.typeColors.grass.background};
    }
  }
  &.Ice {
    border-color: ${theme.typeColors.ice.border};
    &:hover {
      background-color: ${theme.typeColors.ice.background};
    }
  }
  &.Ground {
    border-color: ${theme.typeColors.ground.border};
    &:hover {
      background-color: ${theme.typeColors.ground.background};
    }
  }
  &.Flying {
    border-color: ${theme.typeColors.flying.border};
    &:hover {
      background-color: ${theme.typeColors.flying.background};
    }
  }
  &.Ghost {
    border-color: ${theme.typeColors.ghost.border};
    &:hover {
      background-color: ${theme.typeColors.ghost.background};
    }
  }
  &.Rock {
    border-color: ${theme.typeColors.rock.border};
    &:hover {
      background-color: ${theme.typeColors.rock.background};
    }
  }
  &.Fighting {
    border-color: ${theme.typeColors.fighting.border};
    &:hover {
      background-color: ${theme.typeColors.fighting.background};
    }
  }
  &.Poison {
    border-color: ${theme.typeColors.poison.border};
    &:hover {
      background-color: ${theme.typeColors.poison.background};
    }
  }
  &.Psychic {
    border-color: ${theme.typeColors.psychic.border};
    &:hover {
      background-color: ${theme.typeColors.psychic.background};
    }
  }
  &.Bug {
    border-color: ${theme.typeColors.bug.border};
    &:hover {
      background-color: ${theme.typeColors.bug.background};
    }
  }
  &.Dark {
    border-color: ${theme.typeColors.dark.border};
    &:hover {
      background-color: ${theme.typeColors.dark.background};
    }
  }
  &.Steel {
    border-color: ${theme.typeColors.steel.border};
    &:hover {
      background-color: ${theme.typeColors.steel.background};
    }
  }
  &.Dragon {
    border-color: ${theme.typeColors.dragon.border};
    &:hover {
      background-color: ${theme.typeColors.dragon.background};
    }
  }
  &.Fairy {
    border-color: ${theme.typeColors.fairy.border};
    &:hover {
      background-color: ${theme.typeColors.fairy.background};
    }
  }
`;

export const CardId = styled.span`
  width: 3rem;
  color: #333;
  padding: 0.1rem;
  font-weight: 700;
  position: absolute;
  border-radius: 0 0 10px 0;
  top: 0;
  left: 0;
  &.Normal {
    background-color: ${theme.typeColors.normal.background};
  }
  &.Fire {
    background-color: ${theme.typeColors.fire.background};
  }
  &.Water {
    background-color: ${theme.typeColors.water.background};
  }
  &.Electric {
    background-color: ${theme.typeColors.electric.background};
  }
  &.Grass {
    background-color: ${theme.typeColors.grass.background};
  }
  &.Ice {
    background-color: ${theme.typeColors.ice.background};
  }
  &.Ground {
    background-color: ${theme.typeColors.ground.background};
  }
  &.Flying {
    background-color: ${theme.typeColors.flying.background};
  }
  &.Ghost {
    background-color: ${theme.typeColors.ghost.background};
  }
  &.Rock {
    background-color: ${theme.typeColors.rock.background};
  }
  &.Fighting {
    background-color: ${theme.typeColors.fighting.background};
  }
  &.Poison {
    background-color: ${theme.typeColors.poison.background};
  }
  &.Psychic {
    background-color: ${theme.typeColors.psychic.background};
  }
  &.Bug {
    background-color: ${theme.typeColors.bug.background};
  }
  &.Dark {
    background-color: ${theme.typeColors.dark.background};
  }
  &.Steel {
    background-color: ${theme.typeColors.steel.background};
  }
  &.Dragon {
    background-color: ${theme.typeColors.dragon.background};
  }
  &.Fairy {
    background-color: ${theme.typeColors.fairy.background};
  }
`;
