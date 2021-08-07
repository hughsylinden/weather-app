import React from "react";
import PropTypes from "prop-types";
import ForecastSummary from "./ForecastSummary";
import "../styles/ForecastSummaries.css";

const ForecastSummaries = ({ forecasts, onForecastSelect }) => {
  return (
    <div className="forecast-summaries">
      {forecasts.map((forecast) => (
        <ForecastSummary
          key={forecast.date}
          date={forecast.date}
          temperature={forecast.temperature}
          description={forecast.description}
          icon={forecast.icon}
          onSelect={onForecastSelect}
        />
      ))}
    </div>
  );
};

ForecastSummaries.propTypes = {
  forecasts: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.number,
      temperature: PropTypes.shape({
        min: PropTypes.number,
        max: PropTypes.number,
      }).isRequired,
      description: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
    })
  ),
  onForecastSelect: PropTypes.func.isRequired,
};

ForecastSummaries.defaultProps = {
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
export default ForecastSummaries;
