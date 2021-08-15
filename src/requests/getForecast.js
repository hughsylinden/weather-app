import axios from "axios";

const getForecast = (
  setSelectedDate,
  setForecasts,
  setLocation,
  city,
  setErrorMessage
) => {
  const endpoint = city
    ? `https://mcr-codes-weather-app.herokuapp.com/forecast?city=${city}`
    : "https://mcr-codes-weather-app.herokuapp.com/forecast";

  axios
    .get(endpoint)
    .then((response) => {
      setSelectedDate(response.data.forecasts[0].date);
      setForecasts(response.data.forecasts);
      setLocation(response.data.location);
    })
    .catch((error) => {
      const errorResponse = error.response;
      let errMsg = "ERROR ";
      if (errorResponse.status === 404) {
        errMsg += `- "${city}" is either outside the UK or does not exist`;
      } else {
        errMsg += `- 500 status`;
      }
      setErrorMessage(errMsg);
    });
};

export default getForecast;
