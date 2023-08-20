import { Flex, FlexProps } from "@chakra-ui/react";
import { FC } from "react";

interface Props extends FlexProps {
  children: React.ReactElement;
}

export const Card: FC<Props> = ({ children }) => {
  return (
    <>
      <Flex
        backgroundColor="#090B17"
        borderRadius="15px"
        flexDirection="column"
        padding="60px"
      >
        {children}
      </Flex>
    </>
  );
};
