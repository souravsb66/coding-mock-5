import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Button,
  ButtonGroup,
} from "@chakra-ui/react";
import axios from "axios"
import { baseURL } from "../redux/store";
import { deleteContactRequest, deleteContactSuccess } from "../redux/action";

const ContactsTable = () => {
  const { contacts } = useSelector((store) => store);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    // console.log(id);

    dispatch(deleteContactRequest());
    axios.delete(`${baseURL}/contacts/delete/${id}`)
    .then((res) => {
      dispatch(deleteContactSuccess(id));
    })
    .catch((err) => {
      console.log(err);
    })
  }

  return (
    <TableContainer width="100%">
      <Table variant="striped" colorScheme="teal">
        <Thead>
          <Tr>
            <Th>Full Name</Th>
            <Th>Email</Th>
            <Th>Phone Number</Th>
            <Th>Label</Th>
            <Th>Action</Th>
          </Tr>
        </Thead>
        <Tbody>
          {contacts.length > 0 &&
            contacts.map((ele) => {
              return (
                <Tr key={ele._id}>
                  <Td>{ele.name}</Td>
                  <Td>{ele.email}</Td>
                  <Td>{ele.phoneNumber}</Td>
                  <Td>{ele.label}</Td>
                  <Td>
                    <ButtonGroup>
                      <Button colorScheme="green">Edit</Button>
                      <Button colorScheme="red" onClick={() => {handleDelete(ele._id)}}>Delete</Button>
                    </ButtonGroup>
                  </Td>
                </Tr>
              );
            })}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default ContactsTable;
