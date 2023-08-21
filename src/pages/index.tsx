import { Card } from "@/components/UI/card";
import { HomeCard } from "@/components/UI/homeCard";
import { Layout } from "@/components/layout";
import { SearchBar } from "@/components/search";
import { useRequest } from "@/hooks/request";
import { Box } from "@chakra-ui/react";
import { FC, useEffect } from "react";

const Home: FC = () => {
  const {
    navRequest,
    bgImageUpdate,
    getGeo,
    setSearch,
    loading,
    search,
    bgImg,
    weather,
    main,
    daily,
  } = useRequest();

  useEffect(() => {
    // Request location permission and fetch weather data
    navRequest();
  }, []);

  useEffect(() => {
    // Update bgImg based on currentWeather
    bgImageUpdate();
  }, [main]);

  return (
    <>
      <Box
        minH="100vh"
        backgroundImage={bgImg}
        bgRepeat="no-repeat"
        bgSize="cover"
      >
        <Layout>
          <Card>
            <SearchBar
              search={search}
              loading={loading}
              getGeo={getGeo}
              setSearch={setSearch}
            />
            <HomeCard data={main} weather={weather} daily={daily} />
          </Card>
        </Layout>
      </Box>
    </>
  );
};

export default Home;
