import { useCurrent } from "@/hooks/currentWeather";
import { Weather } from "@/types/weather";
import { Flex, FlexProps, Heading } from "@chakra-ui/react";
import { FC } from "react";

interface Props extends FlexProps {
  data: Weather["current"];
  weather: Weather | null;
}

export const CurrentTemp: FC<Props> = ({ data, weather, ...rest }) => {
  const { mainTemp, time_zone } = useCurrent({ data, weather });

  return (
    <>
      <Flex
        flexDirection={{ base: "column", md: "row" }}
        alignItems="center"
        gap={4}
        {...rest}
      >
        <Heading fontSize={{ base: "4xl", md: "7xl", lg: "7xl" }}>
          {mainTemp}°
        </Heading>
        <span>{time_zone}</span>
      </Flex>
    </>
  );
};
