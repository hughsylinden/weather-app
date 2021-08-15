import "../styles/App.css";
import React, { useState, useEffect } from "react";
import LocationDetails from "./LocationDetails";
import ForecastSummaries from "./ForecastSummaries";
import ForecastDetails from "./ForecastDetails";
import SearchForm from "./SearchForm";
import getForecast from "../requests/getForecast";

function App() {
  const [forecasts, setForecasts] = useState([]);
  const [location, setLocation] = useState({ city: "", country: "" });
  const [selectedDate, setSelectedDate] = useState(0);
  const [citySearch, setCitySearch] = useState("");
  const [cityInput, setCityInput] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    getForecast(
      setSelectedDate,
      setForecasts,
      setLocation,
      citySearch,
      setErrorMessage
    );
  }, [citySearch]);

  useEffect(() => {
    setTimeout(() => {
      setErrorMessage("");
    }, 5000);
  }, [errorMessage]);

  const selectedForecast = forecasts.find(
    (forecast) => forecast.date === selectedDate
  );

  function handleForecastSelect(date) {
    setSelectedDate(date);
  }

  function handleCitySearch(e) {
    e.preventDefault();
    setCitySearch(cityInput);
  }

  function handleCityInput(event) {
    setCityInput(event.target.value);
  }

  return (
    <div className="weather-app">
      <br />
      <span className="weather-app-location-search">
        <LocationDetails
          city={location.city}
          country={location.country}
          errorMessage={errorMessage}
        />
        <SearchForm
          handleCitySearch={handleCitySearch}
          handleCityInput={handleCityInput}
        />
      </span>
      {!errorMessage && (
        <>
          {selectedForecast && <ForecastDetails forecast={selectedForecast} />}
          <ForecastSummaries
            forecasts={forecasts}
            onForecastSelect={handleForecastSelect}
          />
        </>
      )}
    </div>
  );
}
export default App;
