import { Container, ContainerProps, Flex, FlexProps } from "@chakra-ui/react";
import { FC } from "react";

interface Props extends ContainerProps {
  children: React.ReactElement | React.ReactElement[];
}

interface Flexing extends FlexProps {
  children: JSX.Element[];
}

export const Layout: FC<Props> = ({ children, ...rest }) => {
  return (
    <Container
      display="flex"
      flexDir="column"
      justifyContent="flex-start"
      maxW="container.xl"
      w="100%"
      position="relative"
      px={{ base: 6, lg: 24 }}
      pt={{ base: 6, md: 16 }}
      pb={{ sm: 8, md: 24 }}
      zIndex={10}
      {...rest}
    >
      {children}
    </Container>
  );
};

export const GridItemContainer = ({ children }: Flexing) => {
  return (
    <Flex flexDirection={{ base: "column", md: "row" }} gap={12}>
      {children}
    </Flex>
  );
};
