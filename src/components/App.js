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

  useEffect(() => {
    getForecast(setSelectedDate, setForecasts, setLocation, citySearch);
  }, [citySearch]);

  const selectedForecast = forecasts.find(
    (forecast) => forecast.date === selectedDate
  );

  function handleForecastSelect(date) {
    setSelectedDate(date);
  }

  function handleCitySearch() {
    setCitySearch(cityInput);
  }

  function handleCityInput(event) {
    setCityInput(event.target.value);
  }

  return (
    <div className="weather-app">
      <br />
      <LocationDetails city={location.city} country={location.country} />
      <SearchForm
        handleCitySearch={handleCitySearch}
        handleCityInput={handleCityInput}
      />
      <ForecastSummaries
        forecasts={forecasts}
        onForecastSelect={handleForecastSelect}
      />
      {selectedForecast && <ForecastDetails forecast={selectedForecast} />}
    </div>
  );
}
export default App;
