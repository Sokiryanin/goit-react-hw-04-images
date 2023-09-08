import { useState } from 'react';
import { FcSearch } from 'react-icons/fc';

import {
  Header,
  SearchForm,
  SearchFormBtn,
  SearchFormBtnLabel,
  SearchFormInput,
} from './Searchbar.styled';

function Searchbar({ onSubmit }) {
  const [query, setQuery] = useState('');

  const handleSubmit = evt => {
    evt.preventDefault();

    onSubmit(query);
  };

  const handleChange = evt => {
    setQuery(evt.currentTarget.value);
  };

  return (
    <Header>
      <SearchForm onSubmit={handleSubmit}>
        <SearchFormBtn type="submit">
          <SearchFormBtnLabel>
            <FcSearch size="25" />
          </SearchFormBtnLabel>
        </SearchFormBtn>

        <SearchFormInput
          onChange={handleChange}
          value={query}
          type="text"
          name="query"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </SearchForm>
    </Header>
  );
}

export default Searchbar;
