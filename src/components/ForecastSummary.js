/* eslint-disable jsx-a11y/click-events-have-key-events */
import "../styles/ForecastSummary.css";
import React from "react";
import PropTypes from "prop-types";
import WeatherIcon from "react-icons-weather";
import moment from "moment";

const ForecastSummary = (props) => {
  const { date, temperature, description, icon, onSelect } = props;
  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div
      className="forecast-summary"
      onClick={() => onSelect(date)}
      data-testid="forecast-summary"
    >
      <div className="forecast-summary__date">
        {moment(date).format("ddd Do MMM")}
      </div>
      <div className="forecast-summary__icon" data-testid="forecast-icon">
        <WeatherIcon name="owm" iconId={icon} />
      </div>
      <div className="forecast-summary__temperature">
        {temperature.max}&#176;C
      </div>
      <div className="forecast-summary__description">{description}</div>
      <br />
      <br />
      <br />
      <br />
      <button
        type="button"
        onClick={() => onSelect(date)}
        id="test"
        className="forecast-summary__button"
      >
        DETAILS
      </button>
    </div>
  );
};

ForecastSummary.propTypes = {
  date: PropTypes.number.isRequired,
  temperature: PropTypes.shape({
    min: PropTypes.number,
    max: PropTypes.number,
  }).isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default ForecastSummary;
