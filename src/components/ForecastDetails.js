import React from "react";
import PropTypes from "prop-types";
import WeatherIcon from "react-icons-weather";
import moment from "moment";

const ForecastDetails = ({ forecast }) => {
  const { date, description, icon, temperature, humidity, wind } = forecast;
  return (
    <div className="forecast-details" data-testid="forecast-details">
      <div className="forecast-details__date">
        {moment(date).format("ddd Do MMM")}
      </div>
      <div className="forecast-details__icon" data-testid="forecast-icon">
        <WeatherIcon name="owm" iconId={icon.toString()} />
      </div>
      <div
        className="forecast-details__temperature"
        data-testid="forecast-temperature"
      >
        Max:{temperature.max}&#176;C
        <br />
        Min:{temperature.min}&#176;C
      </div>
      <div className="forecast-details__description">{description}</div>
      <div className="forecast-details__humidity">{humidity}</div>
      <div className="forecast-details__wind">
        {wind.speed}
        {wind.direction}
      </div>
    </div>
  );
};

ForecastDetails.propTypes = {
  forecast: PropTypes.shape({
    date: PropTypes.number,
    temperature: PropTypes.shape({
      min: PropTypes.number,
      max: PropTypes.number,
    }).isRequired,
    description: PropTypes.string.isRequired,
    icon: PropTypes.number.isRequired,
    wind: PropTypes.shape({
      speed: PropTypes.number,
      direction: PropTypes.string,
    }).isRequired,
    humidity: PropTypes.number.isRequired,
  }),
};

ForecastDetails.defaultProps = {
  forecast: PropTypes.shape({
    date: 0,
    temperature: PropTypes.shape({
      min: -60,
      max: 60,
    }),
    description: "",
    icon: 800,
    wind: PropTypes.shape({
      speed: 0,
      direction: "",
    }),
    humidity: 0,
  }),
};

export default ForecastDetails;
