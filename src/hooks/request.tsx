import { QueryData, Weather } from "@/types/weather";
import { useCallback, useState } from "react";

export const useRequest = () => {
  const [search, setSearch] = useState("");
  const [error, setError] = useState("");
  const [bgImg, setBgImg] = useState("");
  const [weather, setWeather] = useState<Weather | null>(null);
  const [daily, setDaily] = useState<Weather["daily"] | null>(null);
  const [main, setMain] = useState<Weather["current"] | null>(null);
  const [loading, setLoading] = useState(false);

  const fetching = useCallback(
    async ({ latitude, longitude }: QueryData) => {
      try {
        setLoading(true);
        const query = await fetch(
          `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=6a2a71aeb490be4989d889789334d911`
        );
        const result = await query.json();
        console.log(result);
        setMain(result.current);
        setDaily(result.daily);
        setWeather(result);
        setLoading(false);
      } catch (error) {
        alert(error);
      }
    },
    [search]
  );

  const getGeo = async function (city: string) {
    // using gecoding to get latitude and longitude coordinates
    const url = `https://forward-reverse-geocoding.p.rapidapi.com/v1/forward?city=${city}&accept-language=en`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "b8c2376f51msh0b37bb1ac5317e3p18f7adjsn894663ffea79",
        "X-RapidAPI-Host": "forward-reverse-geocoding.p.rapidapi.com",
      },
    };
    try {
      const location = await fetch(url, options);
      const cords = await location.json();
      const latitude = parseFloat(cords[0].lat);
      const longitude = parseFloat(cords[0].lon);

      fetching({ latitude, longitude });
    } catch (error) {
      console.log(error);
    }
  };

  const navRequest = () => {
    // Request location permission and fetch weather data
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          try {
            const { latitude, longitude } = position.coords;
            fetching({ latitude, longitude });
          } catch (error) {
            setError("Error fetching weather data");
            console.error("Error fetching weather data:", error);
          }
        },
        (error) => {
          setError("Error getting location");
          console.error("Error getting location:", error);
        }
      );
    }
  };

  const bgImageUpdate = () => {
    if (main?.weather && main.weather.length > 0) {
      const currentWeather = main.weather[0].main;
      let newBgImg = "";

      if (currentWeather === "Clouds") {
        newBgImg = "/assets/bgImg/cloudyBackground.jpg";
      } else if (currentWeather === "Clear") {
        newBgImg = "/assets/bgImg/clearBackground.jpg";
      } else if (currentWeather === "Rain") {
        newBgImg = "/assets/bgImg/rainyBackground.jpg";
      } else if (currentWeather === "Snow") {
        newBgImg = "/assets/bgImg/snowBackground.jpg";
      } else if (currentWeather === "Thunderstorm") {
        newBgImg = "/assets/bgImg/thunderBackground.jpg";
      } else if (currentWeather === "Mist") {
        newBgImg = "/assets/bgImg/mistyBackground.jpg";
      } else {
        newBgImg = ""; // Default background reverts to chakra theme
      }

      setBgImg(newBgImg);
    }
  };

  return {
    search,
    daily,
    main,
    weather,
    loading,
    bgImg,
    setSearch,
    fetching,
    navRequest,
    getGeo,
    bgImageUpdate,
  };
};
