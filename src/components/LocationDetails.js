import "../styles/LocationDetails.css";
import React from "react";
import PropTypes from "prop-types";

const LocationDetails = ({ city, country, errorMessage }) => {
  return (
    <div>
      <h1 className="location-details">
        {city}, {country}
      </h1>
      <div className="error-message">{errorMessage}</div>
    </div>
  );
};

LocationDetails.propTypes = {
  city: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  errorMessage: PropTypes.string.isRequired,
};

export default LocationDetails;
