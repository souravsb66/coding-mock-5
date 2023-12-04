import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
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
import axios from "axios";
import { baseURL } from "../redux/store";
import ContactsTable from "../components/ContactsTable";
import {
  addContactRequest,
  addContactSuccess,
  getContactsFailure,
  getContactsRequest,
  getContactsSuccess,
} from "../redux/action";
import { initialContactsData } from "../utils/contactsData";

const Home = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const dispatch = useDispatch();

  const [contactData, setContactData] = useState(initialContactsData);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchData(`${baseURL}/contacts/getall`);
  }, []);

  const fetchData = (url) => {
    dispatch(getContactsRequest());
    axios
      .get(url)
      .then((res) => {
        // console.log(res.data);
        dispatch(getContactsSuccess(res.data));
      })
      .catch((err) => {
        // console.log(err);
        dispatch(getContactsFailure());
      });
  };

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

    dispatch(addContactRequest());
    axios
      .post(`${baseURL}/contacts`, contactData)
      .then((res) => {
        dispatch(addContactSuccess(res.data.newContact));
      })
      .catch((err) => {
        console.log(err);
      });

    setContactData(initialContactsData);
  };

  return (
    <Container p="2rem" maxWidth="fit-content">
      <Container>
        <Button colorScheme="blue" onClick={onOpen}>
          Add Contact
        </Button>
        <Input mt="1rem" placeholder="Search Contact" />
      </Container>

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
              <Button colorScheme="blue" mr={3} mt={3} onClick={handleAdd}>
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

      <ContactsTable />
    </Container>
  );
};

export default Home;
