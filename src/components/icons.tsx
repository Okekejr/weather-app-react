interface Props {
  main: string | undefined;
}

export const Icons = ({ main }: Props) => {
  switch (main) {
    case "Thunderstorm":
      main = "/assets/svg/thunder.svg";
      break;
    case "Drizzle":
      main = "icons/drizzle.svg";
      break;
    case "Rain":
      main = "/assets/svg/rainy.svg";
      break;
    case "Snow":
      main = "/assets/svg/snowy.svg";
      break;
    case "Mist":
      main = "/assets/svg/cloudy.svg";
      break;
    case "Clear":
      main = "/assets/svg/clear.svg";
      break;
    case "Atmosphere":
      main = "icons/weather.svg";
      break;
    case "Clouds":
      main = "/assets/svg/cloudy.svg";
      break;
    case "Fog":
      main = "icons/fog.svg";
      break;
    case "Haze":
      main = "icons/haze.svg";
      break;
    case "Smoke":
      main = "icons/smoke.svg";
      break;
    default:
      main = "/assets/svg/weather.svg";
  }
  return main;
};
