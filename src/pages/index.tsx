import { Link as ChakraLink, Heading, Box } from "@chakra-ui/core";
import React, { useEffect, useState } from "react";
import axios from "axios";

const Index = () => {
  const [name, setName] = useState("");

  useEffect(() => {
    axios
      .post("/api/hello", { data: "Hi there" })
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <Box height="100vh">
      <Heading>Name received from api is {name}</Heading>
      <Heading as="h3" size="md" mt={10}>
        View on <ChakraLink isExternal>codesandbox</ChakraLink>
      </Heading>
    </Box>
  );
};

export default Index;
