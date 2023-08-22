import { useCurrent } from "@/hooks/currentWeather";
import { Weather } from "@/types/weather";
import { Image, ImageProps } from "@chakra-ui/react";
import { FC } from "react";
import { Icons } from "../icons";

interface Props extends ImageProps {
  data: Weather["current"];
  weather: Weather | null;
}

export const MainIcon: FC<Props> = ({ data, weather, ...rest }) => {
  const { main } = useCurrent({ data, weather });

  return (
    <>
      <Image
        src={Icons({ main })}
        w={{ base: "", md: "20rem", lg: "23rem" }}
        h={{ base: "", md: "15rem", lg: "23rem" }}
        m="auto"
        alt={main}
        {...rest}
      />
    </>
  );
};
