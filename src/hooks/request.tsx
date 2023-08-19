import { QueryData, Weather } from "@/types/weather";
import { useCallback, useState } from "react";

export const useRequest = () => {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState<Weather[]>([]);
  const [loading, setLoading] = useState(false);

  const fetching = useCallback(async ({ latitude, longitude }: QueryData) => {
    try {
      setLoading(true);
      const query = await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutelyweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&units=metric&appid=80a892b16dd01568415e7239894b5f58`
      );
      const result = await query.json();
      setWeather(result);
      setLoading(false);
    } catch (error) {
      alert(error);
    }
  }, []);

  const getGeo = async function (city: string) {
    // using gecoding to get latitude and longitude coordinates
    const location = await fetch(`https://geocode.xyz/${city}?json=1`);
    const cords = await location.json();
    const latitude = cords.latt;
    const longitude = cords.longt;

    fetching({ latitude, longitude });
  };

  return {
    search,
    setSearch,
    weather,
    setWeather,
    loading,
    fetching,
    getGeo,
  };
};
