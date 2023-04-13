import { Component } from 'react';
import PropTypes from 'prop-types';
import {
  SearchbarStyled,
  Input,
  SearchButton,
  SearchForm,
} from './Searchbar.styled';
export class Searchbar extends Component {
  state = { searchValue: '' };
  handleSubmit = event => {
    event.preventDefault();
    const { searchValue } = this.state;
    console.log(searchValue);
    searchValue && this.props.onSubmit(searchValue);
  };
  onChange = event => {
    this.setState({ searchValue: event.currentTarget.value });
  };
  render() {
    return (
      <SearchbarStyled>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchButton type="submit">search</SearchButton>
          <Input
            onChange={this.onChange}
            type="text"
            autocomplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </SearchForm>
      </SearchbarStyled>
    );
  }
}
Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
