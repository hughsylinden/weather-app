import axios from "axios";

const getForecast = (setSelectedDate, setForecasts, setLocation, city) => {
  const endpoint = `https://mcr-codes-weather-app.herokuapp.com/forecast?city=${city}`;

  axios
    .get(endpoint)
    .then((response) => {
      setSelectedDate(response.data.forecasts[0].date);
      setForecasts(response.data.forecasts);
      setLocation(response.data.location);
    })
    .catch(() => alert(`cannot find ${city} in database`));
};

export default getForecast;
