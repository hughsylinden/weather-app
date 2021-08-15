import "../styles/SearchForm.css";
import React from "react";
import PropTypes from "prop-types";

const SearchForm = ({ handleCitySearch, handleCityInput }) => {
  return (
    <form className="search-form">
      <input
        className="search-form__input"
        type="text"
        onChange={handleCityInput}
      />
      <br />
      <button
        type="submit"
        className="search-form__button"
        onClick={handleCitySearch}
      >
        Search
      </button>
    </form>
  );
};

SearchForm.propTypes = {
  handleCityInput: PropTypes.func.isRequired,
  handleCitySearch: PropTypes.func.isRequired,
};

export default SearchForm;
