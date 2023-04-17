import { useState } from 'react';
import PropTypes from 'prop-types';
import {
  SearchbarStyled,
  Input,
  SearchButton,
  SearchForm,
} from './Searchbar.styled';
export const Searchbar = ({ onSubmit }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleSubmit = event => {
    event.preventDefault();

    searchValue && onSubmit(searchValue);
  };
  const onChange = event => {
    setSearchValue(event.currentTarget.value);
  };

  return (
    <SearchbarStyled>
      <SearchForm onSubmit={handleSubmit}>
        <SearchButton type="submit">search</SearchButton>
        <Input
          onChange={onChange}
          type="text"
          autocomplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </SearchForm>
    </SearchbarStyled>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
