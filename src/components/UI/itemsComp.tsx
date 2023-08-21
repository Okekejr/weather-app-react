import { FC, ReactNode } from "react";
import { Flex, FlexProps, Text } from "@chakra-ui/react";

interface Props extends FlexProps {
  icon: ReactNode;
  title: string;
  data: number;
}

export const ItemsComp: FC<Props> = ({ icon, title, data }) => {
  return (
    <>
      <Flex gap={4} flexDirection="row" alignItems="center">
        {icon}
        <Flex flexDirection="column">
          <Text fontSize="0.6rem">{title}</Text>
          {title === "Humidity" ? <Text fontWeight="bold">{data}%</Text> : ""}
          {title === "Feels like" ? (
            <Text fontWeight="bold">{Math.floor(data)}°</Text>
          ) : (
            ""
          )}
          {title === "Wind speed" ? (
            <Text fontSize={{ base: "0.7rem", md: "1rem" }} fontWeight="bold">
              ENE {Math.floor(data)} kmh
            </Text>
          ) : (
            ""
          )}
        </Flex>
      </Flex>
    </>
  );
};
