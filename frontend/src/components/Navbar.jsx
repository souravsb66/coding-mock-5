import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink, Container } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Container>
      <ChakraLink as={ReactRouterLink} to="/">
        Home
      </ChakraLink>
    </Container>
  );
};

export default Navbar;
