import "./App.css";
import { useState } from "react";
import Search from "./components/Search";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";

function App() {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("");

  return (
    <div className="App">
      <div className="Card">
        <Search setWeather={setWeather} setCity={setCity} />
        <MainContent weather={weather} city={city} />
        <Footer weather={weather} />
      </div>
    </div>
  );
}

export default App;
