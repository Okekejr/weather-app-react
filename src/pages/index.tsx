import { Card } from "@/components/UI/card";
import { HomeCard } from "@/components/UI/homeCard";
import { Layout } from "@/components/layout";
import { useRequest } from "@/hooks/request";
import { FC, useEffect, useState } from "react";

const Home: FC = () => {
  const [error, setError] = useState("");
  const { fetching, weather, main } = useRequest();

  useEffect(() => {
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
  }, []);

  return (
    <>
      <Layout>
        <Card>
          <HomeCard data={main} />
        </Card>
      </Layout>
    </>
  );
};

export default Home;
