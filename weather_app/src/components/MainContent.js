import "../App.css";

import { CiCloudOn, CiSun } from "react-icons/ci";
import { IoRainyOutline } from "react-icons/io5";
import { IoIosThunderstorm } from "react-icons/io";
import { FaRegSnowflake } from "react-icons/fa";

function MainContent({ weather, city }) {
  // Function to determine which icon to display based on the weather condition
  const renderWeatherIcon = (condition) => {
    console.log(weather?.current?.condition?.text);
    switch (condition) {
      case "Sunny":
        return <CiSun className="weather-icon" />;
      case "Rain":
        return <IoRainyOutline className="weather-icon" />;
      case "Snow":
        return <FaRegSnowflake className="weather-icon" />;
      case "Thunderstorm":
        return <IoIosThunderstorm className="weather-icon" />;
      case "Partly cloudy":
      default:
        return <CiCloudOn className="weather-icon" />;
    }
  };

  return (
    <div className="Main_Content">
      <h1>{city}</h1>
      <h4>{weather?.location?.country}</h4>
      {renderWeatherIcon(weather?.current?.condition?.text)}
      <h1>{weather?.current?.temp_c}°C</h1>
      <h3>{weather?.current?.condition?.text}</h3>
    </div>
  );
}

export default MainContent;
