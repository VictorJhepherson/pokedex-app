import React from 'react';

export type LogoProps = {
  size?: 'small' | 'normal' | 'medium' | 'large';
};

const Logo: React.FC<LogoProps> = ({ size = 'normal' }) => {
  let width = 0;
  let height = 0;

  if (size === 'small') {
    width = 260;
    height = 69;
  } else if (size === 'normal') {
    width = 366;
    height = 149;
  } else if (size === 'medium') {
    width = 642;
    height = 260;
  } else {
    width = 798;
    height = 323;
  }
  return (
    <img src="/img/logo.svg" alt="Logo Pokedex" height={height} width={width} />
  );
};

export default Logo;
