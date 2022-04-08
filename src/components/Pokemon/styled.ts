import styled from 'styled-components';
import theme from '../../styles/theme';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 600px;
`;

export const Name = styled.h1`
  font-family: ${theme.font.fontFamily};
  font-weight: ${theme.font.medium};
  font-size: ${theme.font.size.xlarge};
  color: ${theme.colors.black};
`;

export const Information = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 85%;
  height: 100%;
`;

export const Title = styled.td`
  font-weight: bold;
  text-align: left;
`;

export const Info = styled.td`
  display: flex;
  align-items: center;
  justify-content: space-around;
  text-align: center;
`;

export const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: large;
  transition: 0.3s;
  padding: 10px;
  transform: rotate3d(1, 1, 1, 20deg);
  &:hover {
    transform: rotate(0);
  }

  .ability {
    text-align: center;
    border-radius: 4px;
    height: 30px;
    width: 8rem;
    transition: 200ms all;
    margin: 0 0 0 15px;
  }

  .types {
    text-align: center;
    border-radius: 4px;
    height: 30px;
    width: 8rem;
    filter: brightness(1.2);
    transition: 200ms all;
    margin: 0 0 0 15px;
  }
`;

export const Center = styled.div`
  flex: 1;
  width: 40%;
  height: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.img`
  width: 100%;
  margin: auto;
`;

export const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: large;
  transition: 0.3s;
  padding: 10px;
  transform: rotate3d(1, 1, 1, 20deg);
  &:hover {
    transform: rotate(0);
  }

  .progress {
    width: 16rem;
    background: rgba(0, 0, 0, 0.25);
    border-radius: 2px;
    box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.25),
      0 1px rgba(255, 255, 255, 0.08);
  }

  .progress-bar {
    height: 18px;
    background-color: #ee303c;
    border-radius: 4px;
    transition: 0.4s linear;
    transition-property: width, background-color;
  }
`;

export const Badge = styled.div`
  &.Normal {
    background-color: #a8a878;
    box-shadow: 0 0 20px #a8a878;
    color: #fff;
  }
  &.Fire {
    background-color: #f08030;
    box-shadow: 0 0 20px #f08030;
    color: #fff;
  }
  &.Water {
    background-color: #6890f0;
    box-shadow: 0 0 20px #6890f0;
    color: #fff;
  }
  &.Electric {
    background-color: #f8d030;
    box-shadow: 0 0 20px #f8d030;
    color: #fff;
  }
  &.Grass {
    background-color: #78c850;
    box-shadow: 0 0 20px #78c850;
    color: #fff;
  }
  &.Ice {
    background-color: #98d8d8;
    box-shadow: 0 0 20px #98d8d8;
    color: #fff;
  }
  &.Ground {
    background-color: #e0c068;
    box-shadow: 0 0 20px #e0c068;
    color: #fff;
  }
  &.Flying {
    background-color: #a890f0;
    box-shadow: 0 0 20px #a890f0;
    color: #fff;
  }
  &.Ghost {
    background-color: #705898;
    box-shadow: 0 0 20px #705898;
    color: #fff;
  }
  &.Rock {
    background-color: #b8a038;
    box-shadow: 0 0 20px #b8a038;
    color: #fff;
  }
  &.Fighting {
    background-color: #c03028;
    box-shadow: 0 0 20px #c03028;
    color: #fff;
  }
  &.Poison {
    background-color: #a040a0;
    box-shadow: 0 0 20px #a040a0;
    color: #fff;
  }
  &.Psychic {
    background-color: #f85888;
    box-shadow: 0 0 20px #f85888;
    color: #fff;
  }
  &.Bug {
    background-color: #a8b820;
    box-shadow: 0 0 20px #a8b820;
    color: #fff;
  }
  &.Dark {
    background-color: #705848;
    box-shadow: 0 0 20px #705848;
    color: #fff;
  }
  &.Steel {
    background-color: #b8b8d0;
    box-shadow: 0 0 20px #b8b8d0;
    color: #fff;
  }
  &.Dragon {
    background-color: #7038f8;
    box-shadow: 0 0 20px #7038f8;
    color: #fff;
  }
`;
