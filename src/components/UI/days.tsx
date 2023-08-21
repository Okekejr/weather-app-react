import { Weather } from "@/types/weather";
import { FC } from "react";
import { GridItemContainer } from "../layout";
import { DaysCard } from "./daysCard";
import { Flex, FlexProps, Skeleton } from "@chakra-ui/react";

interface Props extends FlexProps {
  data: Weather["daily"];
}

export const DailyComp: FC<Props> = ({ data, ...rest }) => {
  return (
    <GridItemContainer
      flexWrap="wrap"
      flexDirection="row"
      justifyContent={{ base: "space-evenly", md: "flex-start" }}
      {...rest}
    >
      {data ? (
        data.map((item, i) => {
          return <DaysCard data={item} key={i} index={i} />;
        })
      ) : (
        <Flex gap={4}>
          <Skeleton height="5rem" width="3rem" />
          <Skeleton height="5rem" width="3rem" />
          <Skeleton height="5rem" width="3rem" />
        </Flex>
      )}
    </GridItemContainer>
  );
};
