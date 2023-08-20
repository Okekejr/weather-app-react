import { FC } from "react";
import { GridItemContainer } from "../layout";
import { Weather } from "@/types/weather";
import { useCurrent } from "@/hooks/currentWeather";
import { ItemsComp } from "./itemsComp";

interface Props {
  data: Weather["current"];
  weather: Weather | null;
}

export const Items: FC<Props> = ({ data, weather }) => {
  const { others } = useCurrent({ data, weather });

  const itemComps = Object.values(others);

  return (
    <GridItemContainer>
      {itemComps.map((item, i) => {
        return (
          <ItemsComp
            data={item.data}
            icon={item.icon}
            title={item.title}
            key={i}
          />
        );
      })}
    </GridItemContainer>
  );
};
