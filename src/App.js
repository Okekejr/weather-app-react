import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [search, setSearch] = useState("");
  const [allData, setAllData] = useState({
    location: "location",
    temperature: "0",
    main: "main weather",
    description: "weather description",
    humidity: "",
    feelsLike: "",
  });

  useEffect(() => {
    weather();
  }, []);

  const weather = async function (city) {
    try {
      const APIKEY = "e4e8a38e9749c6c32501f0c3ed976e93";
      const weatherData = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=metric`
      );
      const data = weatherData.json();
      const dataFeed = await data;
      console.log(dataFeed);
      await setAllData({
        location: dataFeed.name,
        temperature: dataFeed.main.temp.toFixed(0),
        main: dataFeed.weather[0].main,
        description: dataFeed.weather[0].description,
        humidity: dataFeed.main.humidity,
        feelsLike: dataFeed.main.feels_like.toFixed(0),
      });
    } catch (error) {
      console.log("couldnt get location, try again or wait 5mins");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    weather(search);
  };

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div>
      <div id="cover">
        <form onSubmit={handleSubmit}>
          <input
            className="input-form"
            value={search}
            type="text"
            placeholder="Search City"
            onChange={handleChange}
          />
        </form>
        <div className="inner">
          <p className="iconText">{allData.main}</p>
          <p className="iconText">{allData.description}</p>
          <h1 className="temp">{allData.temperature}°c</h1>
          <p className="timeZone">{allData.location}</p>
          <div className="flex-row width">
            <p className="feelsLike">Feels like {allData.feelsLike}°c</p>•
            <p className="humidity">Humidity {allData.humidity}%</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
