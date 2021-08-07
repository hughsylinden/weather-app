import "../styles/App.css";
import React from "react";
import PropTypes from "prop-types";
import LocationDetails from "./LocationDetails";
import ForecastSummaries from "./ForecastSummaries";
import ForecastDetails from "./ForecastDetails";

function App({ location, forecasts }) {
  return (
    <div className="weather-app">
      <LocationDetails city={location.city} country={location.country} />
      <ForecastSummaries forecasts={forecasts} />
      <ForecastDetails forecast={forecasts[0]} />
    </div>
  );
}

App.propTypes = {
  location: PropTypes.shape({
    city: PropTypes.string,
    country: PropTypes.string,
  }),
  forecasts: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.number,
      temperature: PropTypes.shape({
        min: PropTypes.number,
        max: PropTypes.number,
      }),
      description: PropTypes.string,
      icon: PropTypes.string,
    })
  ),
};

App.defaultProps = {
  location: PropTypes.shape({
    city: "Glasgow",
    country: "United Kingdom",
  }),
  forecasts: PropTypes.arrayOf({
    date: 0,
    temperature: PropTypes.shape({
      min: -60,
      max: 60,
    }),
    description: "",
    icon: "",
  }),
};

export default App;
