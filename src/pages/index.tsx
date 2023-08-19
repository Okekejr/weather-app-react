import { SearchBar } from "@/components/search";
import { useRequest } from "@/hooks/request";
import { FC, useEffect, useState } from "react";

const Home: FC = () => {
  const [error, setError] = useState("");
  const { fetching, weather } = useRequest();

  // useEffect(() => {
  //   // Request location permission and fetch weather data
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition(
  //       async (position) => {
  //         try {
  //           const { latitude, longitude } = position.coords;
  //           fetching({latitude, longitude})
  //         } catch (error) {
  //           setError("Error fetching weather data");
  //           console.error("Error fetching weather data:", error);
  //         }
  //       },
  //       (error) => {
  //         setError("Error getting location");
  //         console.error("Error getting location:", error);
  //       }
  //     );
  //   }
  // }, []);

  return <>hello</>;
};

export default Home;
