import { useDaily } from "@/hooks/daysWeather";
import { DailyEntity } from "@/types/weather";
import { Image, StackProps, Text, VStack } from "@chakra-ui/react";
import { FC } from "react";
import { Icons } from "../icons";

interface Props extends StackProps {
  data: DailyEntity;
  index: number;
}

export const DaysCard: FC<Props> = ({ data, index }) => {
  const { dt, dailyTemp, main, dayOfWeek, dateObject, justDate } = useDaily({
    data,
  });

  const day = dayOfWeek(dateObject(dt));

  const date = justDate(dateObject(dt));

  return (
    <>
      <VStack
        backgroundColor="#323242"
        backdropFilter="blur(20px)"
        borderRadius="30px"
        display={index === 0 ? "none" : "flex"}
        w={{ base: "2.6rem", lg: "3rem" }}
        h={{ base: "7rem", lg: "8rem" }}
        p={4}
      >
        <Text fontSize="0.8rem" fontWeight="bold">
          {date}
        </Text>
        <Text fontSize="0.6rem">{day}</Text>
        <Image src={Icons({ main })} alt={main} />
        <Text fontSize="0.7rem" fontWeight="bold">
          {Math.floor(dailyTemp)}°
        </Text>
      </VStack>
    </>
  );
};
