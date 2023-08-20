import { useCurrent } from "@/hooks/currentWeather";
import { Weather } from "@/types/weather";
import { Flex, FlexProps, Heading, Text } from "@chakra-ui/react";
import { FC } from "react";

interface Props extends FlexProps {
  data: Weather["current"];
  weather: Weather | null;
}

export const MainDate: FC<Props> = ({ data, weather, ...rest }) => {
  const { date, main } = useCurrent({ data, weather });

  return (
    <>
      <Flex flexDirection="column" {...rest}>
        <Text>{date}</Text>
        <Heading>{main}</Heading>
      </Flex>
    </>
  );
};
