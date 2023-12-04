import React, { useState } from "react";
import {
  Button,
  Container,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Input,
  FormControl,
  FormLabel,
  Select,
} from "@chakra-ui/react";

const Home = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    label: "",
  });

  const handleChange = (e) => {
    setContactData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleAdd = () => {
    console.log(contactData);
  };

  return (
    <Container p="2rem">
      <Button colorScheme="blue" onClick={onOpen}>
        Add Contact
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl isRequired>
              <FormLabel>Enter Name</FormLabel>
              <Input
                placeholder="Name"
                name="name"
                value={contactData.name}
                onChange={handleChange}
              />
              <FormLabel>Enter Email</FormLabel>
              <Input
                type="email"
                name="email"
                placeholder="Email"
                value={contactData.email}
                onChange={handleChange}
              />
              <FormLabel>Enter Phone Number</FormLabel>
              <Input
                type="number"
                name="phoneNumber"
                placeholder="Phone Number"
                value={contactData.phoneNumber}
                onChange={handleChange}
              />
              <FormLabel>Label</FormLabel>
              <Select
                placeholder="Select Relation"
                name="label"
                value={contactData.label}
                onChange={handleChange}
              >
                <option>Work</option>
                <option>School</option>
                <option>Friend</option>
                <option>Family</option>
              </Select>
              <Button colorScheme="blue" mr={3} onClick={handleAdd}>
                Add
              </Button>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Container>
  );
};

export default Home;
