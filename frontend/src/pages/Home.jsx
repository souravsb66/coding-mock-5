import React from "react";
import {
  Input,
  InputGroup,
  InputRightElement,
  Container,
  Button,
} from "@chakra-ui/react";

const Home = () => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  return (
    <Container centerContent mt="2rem">
      <InputGroup size="md" 
          width="300px">
        <Input
          pr="4.5rem"
          type={show ? "text" : "password"}
          placeholder="Enter password"
        />
        <InputRightElement width="4.5rem">
          <Button h="1.75rem" size="sm" onClick={handleClick}>
            {show ? "Hide" : "Show"}
          </Button>
        </InputRightElement>
      </InputGroup>
    </Container>
  );
};

export default Home;
