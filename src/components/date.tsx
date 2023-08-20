import { Weather } from "@/types/weather";
import { Flex, FlexProps, Heading, Text } from "@chakra-ui/react";
import { FC } from "react";

interface Props extends FlexProps {
  data: Weather["current"];
}

export const MainDate: FC<Props> = ({ data, ...rest }) => {
  const dt = data.dt;

  const { main } = data?.weather?.[0] || {};

  // converting UnixTime stamp to milliseconds and then actual date format
  const dateObject = new Date(+dt * 1000);
  const date = dateObject.toLocaleString("en-US", {
    day: "numeric",
    weekday: "short",
    month: "short",
  });

  return (
    <>
      <Flex flexDirection="column" {...rest}>
        <Text>{date}</Text>
        <Heading>{main}</Heading>
      </Flex>
    </>
  );
};
