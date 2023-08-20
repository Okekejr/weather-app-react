import { Weather } from "@/types/weather";
import { ReactNode } from "react";
import { Droplet, TemperatureHigh, Wind } from "iconoir-react";

interface Props {
  data: Weather["current"];
  weather: Weather | null;
}

interface ItemData {
  [key: number]: {
    icon: ReactNode;
    title: string;
    data: number | undefined;
  };
}

export const useCurrent = ({ data, weather }: Props) => {
  // date formating
  const dt = data.dt;

  const { main } = data?.weather?.[0] || {};

  // converting UnixTime stamp to milliseconds and then actual date format
  const dateObject = new Date(+dt * 1000);
  const date = dateObject.toLocaleString("en-US", {
    day: "numeric",
    weekday: "short",
    month: "short",
  });

  // current Temperature
  const mainTemp = Math.floor(data.temp);

  // timezone
  const time_zone = weather?.timezone;

  // humidity, feels_like & wind_speed
  const others: ItemData = {
    0: {
      title: "Wind speed",
      icon: <Wind />,
      data: weather?.current.wind_speed,
    },
    1: {
      title: "Feels like",
      icon: <TemperatureHigh />,
      data: weather?.current.feels_like,
    },
    2: {
      title: "Humidity",
      icon: <Droplet />,
      data: weather?.current.humidity,
    },
  };

  return { date, main, mainTemp, time_zone, others };
};
