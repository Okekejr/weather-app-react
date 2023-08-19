import { useRequest } from "@/hooks/request";
import { SearchIcon } from "@chakra-ui/icons";
import {
  Flex,
  FormControl,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Spinner,
} from "@chakra-ui/react";
import { FC } from "react";

export const SearchBar: FC = () => {
  const { search, setSearch, loading, getGeo } = useRequest();

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    getGeo(search);
    setSearch("");
  };

  const onChangehandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const city = event.currentTarget.value;
    setSearch(city);
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <FormControl isRequired>
          <InputGroup w={{ base: "19rem", md: "30rem" }}>
            <InputLeftElement pointerEvents="none">
              <SearchIcon color="gray.300" />
            </InputLeftElement>
            <Input
              type="text"
              placeholder="Search by City"
              value={search}
              onChange={onChangehandler}
            />
            <InputRightElement
              display={{ base: "none", lg: "flex" }}
              children={
                loading && (
                  <Flex
                    pos="absolute"
                    top="0"
                    right="0"
                    alignItems="center"
                    h="full"
                    mr="2"
                  >
                    <Spinner
                      size="sm"
                      color="blue.600"
                      speed="0.65s"
                      thickness="4px"
                      emptyColor="gray.200"
                    />
                  </Flex>
                )
              }
            />
          </InputGroup>
        </FormControl>
      </form>
    </>
  );
};
