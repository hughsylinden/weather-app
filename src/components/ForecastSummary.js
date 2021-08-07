import React from "react";
import PropTypes from "prop-types";
import WeatherIcon from "react-icons-weather";
import moment from "moment";

const ForecastSummary = (props) => {
  const { date, temperature, description, icon, onSelect } = props;
  return (
    <div className="forecast-summary" data-testid="forecast-summary">
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
      <button
        type="button"
        onClick={() => onSelect(date)}
        className="forecast-summary__description-button"
      >
        More details
      </button>
    </div>
  );
};

ForecastSummary.propTypes = {
  date: PropTypes.number,
  temperature: PropTypes.shape({
    min: PropTypes.number,
    max: PropTypes.number,
  }),
  description: PropTypes.string,
  icon: PropTypes.string,
  onSelect: PropTypes.func,
};

ForecastSummary.defaultProps = {
  date: 0,
  temperature: PropTypes.shape({
    min: -60,
    max: 60,
  }),
  description: "",
  icon: "",
  onSelect: () => {},
};

export default ForecastSummary;
