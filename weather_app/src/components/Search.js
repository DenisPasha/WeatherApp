import { useState } from "react";
import "../App.css";

function Search({ setWeather, setCity }) {
  const [city, setLocalCity] = useState("");

  const fetchWeatherFomBackend = async () => {
    try {
      const response = await fetch(
        `http://localhost:8080/weather?city=${city}`
      );
      const data = await response.json();
      setWeather(data);
    } catch (error) {
      setWeather(null);
    }
  };

  const handleSearch = () => {
    if (city.trim()) {
      fetchWeatherFomBackend();
      setCity(city);
    }
  };

  return (
    <div className="Search">
      <input
        type="text"
        placeholder="Search for a city"
        value={city}
        onChange={(e) => {
          const inputValue = e.target.value;
          const capitalizedValue =
            inputValue.charAt(0).toUpperCase() + inputValue.slice(1);
          setLocalCity(capitalizedValue);
        }}
      />
      <button type="button" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
}

export default Search;
