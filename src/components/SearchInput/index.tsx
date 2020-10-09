import React, { useState } from 'react';
import {
  Container,
  SearchForm
} from './styles';

const SearchInput: React.FC = () => {
  const [search, setSearch] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  }

  return (
    <Container>
      <SearchForm onSubmit={handleSubmit}>
        <input
          placeholder="Pesquisar..."
          value={search}
          onChange={e => setSearch(e.currentTarget.value)}

        />
      </SearchForm>
    </Container>
  );
}

export default SearchInput;