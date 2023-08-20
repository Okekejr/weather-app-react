import { Skeleton, Stack } from "@chakra-ui/react";
import { FC } from "react";
import { Weather } from "@/types/weather";
import { MainDate } from "./date";
import { CurrentTemp } from "./currentTemp";
import { Items } from "./items";

interface Props {
  data: Weather["current"] | null;
  weather: Weather | null;
}

export const HomeCard: FC<Props> = ({ data, weather }) => {
  return (
    <>
      <Stack>
        {data?.dt ? (
          <MainDate
            data={data}
            weather={weather}
            mb={{ base: 12, md: 16, lg: 28 }}
          />
        ) : (
          <Stack mb={12}>
            <Skeleton height="10px" width="5rem" />
            <Skeleton height="10px" width="8rem" />
          </Stack>
        )}

        {data?.temp ? (
          <CurrentTemp
            data={data}
            weather={weather}
            mb={{ base: 12, md: 16, lg: 0 }}
          />
        ) : (
          <Stack mb={12}>
            <Skeleton height={{ base: "4rem", md: "6rem" }} width="7rem" />
            <Skeleton height="10px" width="12rem" />
          </Stack>
        )}

        {data?.humidity ? (
          <Items data={data} weather={weather} />
        ) : (
          <Stack>
            <Skeleton height="10px" width="5rem" />
            <Skeleton height="10px" width="10rem" />
            <Skeleton height="10px" width="12rem" />
          </Stack>
        )}
      </Stack>
    </>
  );
};
