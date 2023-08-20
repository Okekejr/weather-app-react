import { Weather } from "@/types/weather";
import { Text } from "@chakra-ui/react";
import { FC } from "react";

interface Props {
  data: Weather["current"];
}

export const CurrentTemp: FC<Props> = ({ data }) => {
  const mainTemp = Math.floor(data.temp);

  return (
    <>
      <Text fontSize={{ base: "4xl", md: "", lg: "8xl" }}>{mainTemp}°</Text>
    </>
  );
};
