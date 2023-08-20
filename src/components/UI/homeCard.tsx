import { Box, Skeleton, Stack } from "@chakra-ui/react";
import { FC } from "react";
import { MainDate } from "../date";
import { CurrentTemp } from "../currentTemp";
import { Weather } from "@/types/weather";

interface Props {
  data: Weather["current"] | null;
}

export const HomeCard: FC<Props> = ({ data }) => {
  return (
    <>
      <Stack gap={36}>
        {data?.dt ? (
          <MainDate data={data} />
        ) : (
          <Stack>
            <Skeleton height="10px" width="5rem" />
            <Skeleton height="10px" width="8rem" />
          </Stack>
        )}

        <Box>
          {data?.temp ? (
            <CurrentTemp data={data} />
          ) : (
            <Stack>
              <Skeleton height={{ base: "4rem", md: "6rem" }} width="7rem" />
            </Stack>
          )}
        </Box>
      </Stack>
    </>
  );
};
