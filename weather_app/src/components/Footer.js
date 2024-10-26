import "../App.css";
import { WiHumidity } from "react-icons/wi";
import { FaWind } from "react-icons/fa";

function Footer({ weather }) {
  return (
    <>
      <div className="Footer">
        <WiHumidity className="Humidity-icon" />
      </div>
      <div className="Footer-humidity">
        <h4>{weather?.current?.humidity} %</h4>
        <p>Humidity</p>
      </div>
      <FaWind className="Wind-icon" />
      <div className="Footer-wind">
        <h4>{weather?.current?.wind_kph} km/h</h4>
        <p>Wind speed</p>
      </div>
    </>
  );
}

export default Footer;
