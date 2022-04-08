import React, { useState, Dispatch, SetStateAction } from 'react';
import { Section, Input } from './styled';

type IProps = {
  setSearch: Dispatch<SetStateAction<string>>;
};

const Search: React.FC<IProps> = ({ setSearch }) => {
  const [text, setText] = useState('');

  const handleChange = (t: string) => {
    setText(t);
    setSearch(t);
  };

  return (
    <Section>
      <Input
        type="text"
        placeholder="Buscar Pokémon"
        value={text}
        onChange={(e) => handleChange(e.target.value)}
        autoFocus
      />
    </Section>
  );
};

export default Search;
