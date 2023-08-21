import { useCurrent } from "@/hooks/currentWeather";
import { Weather } from "@/types/weather";
import { Flex, FlexProps, Text } from "@chakra-ui/react";
import { FC } from "react";
import { TypingText } from "../animation";

interface Props extends FlexProps {
  data: Weather["current"];
  weather: Weather | null;
}

export const MainDate: FC<Props> = ({ data, weather, ...rest }) => {
  const { dt, formattedDate, dateObject, main } = useCurrent({ data, weather });

  const date = formattedDate(dateObject(dt));

  return (
    <>
      <Flex flexDirection="column" {...rest}>
        <Text>{date}</Text>
        <TypingText title={main} />
      </Flex>
    </>
  );
};
