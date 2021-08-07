import React from "react";
import PropTypes from "prop-types";
import WeatherIcon from "react-icons-weather";
import moment from "moment";

const ForecastSummary = (props) => {
  const { date, temperature, description, icon } = props;
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
};

ForecastSummary.defaultProps = {
  date: 0,
  temperature: PropTypes.shape({
    min: -60,
    max: 60,
  }),
  description: "",
  icon: "",
};

export default ForecastSummary;
