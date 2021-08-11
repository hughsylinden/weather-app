import React from "react";
import PropTypes from "prop-types";

const SearchForm = ({ handleCitySearch, handleCityInput }) => {
  return (
    <div className="search-form">
      <input
        className="search-form__input"
        type="text"
        onChange={handleCityInput}
      />
      <button
        type="submit"
        className="search-form__button"
        onClick={handleCitySearch}
      >
        Search
      </button>
    </div>
  );
};

SearchForm.propTypes = {
  handleCityInput: PropTypes.func.isRequired,
  handleCitySearch: PropTypes.func.isRequired,
};

export default SearchForm;
