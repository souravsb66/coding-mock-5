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

const ContactsTable = () => {
  const { contacts } = useSelector((store) => store);

  console.log(contacts);

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

              console.log(ele);
              return (
                <Tr key={ele._id}>
                  <Td>{ele.name}</Td>
                  <Td>{ele.email}</Td>
                  <Td>{ele.phoneNumber}</Td>
                  <Td>{ele.label}</Td>
                  <Td>
                    <ButtonGroup>
                      <Button colorScheme="green">Edit</Button>
                      <Button colorScheme="red">Delete</Button>
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
