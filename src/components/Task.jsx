import React, { useContext } from "react";
import { taskContext } from "../context/TasksContext";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Center,
} from "@chakra-ui/react";

const Task = () => {
  const { data } = useContext(taskContext);
  return (
    <Center>
      <TableContainer w="36%">
        <Table variant="striped" colorScheme="teal">
          <Thead>
            <Tr>
              <Th>Task Title</Th>
              <Th>Time Tracked (hh:mm:ss)</Th>
            </Tr>
          </Thead>
          {data.length ? (
            <Tbody>
              {/* If data length is true than data.map have work */}
              {data.map((el) => (
                <Tr key={el.id}>
                  <Td>{el.title}</Td>
                  <Td>{el.time_tracked}</Td>
                </Tr>
              ))}
            </Tbody>
          ) : (
            ""
          )}
        </Table>
      </TableContainer>
    </Center>
  );
};

export default Task;
