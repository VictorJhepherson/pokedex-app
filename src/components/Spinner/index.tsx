import React from 'react';

export const Pokeball = () => {
  return (
    <img
      src="/img/pokeball.gif"
      alt="Loading"
      style={{
        width: '800px',
        margin: 'auto',
        display: 'block',
      }}
      loading="lazy"
    />
  );
};

export const PokeballMini = () => {
  return (
    <img
      src="/img/pokeball.gif"
      alt="Loading"
      style={{
        width: '12rem',
        margin: 'auto',
        display: 'block',
      }}
      loading="lazy"
    />
  );
};
