import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  Input,
  Button,
  FormLabel,
} from "@chakra-ui/react";
import { useContext, useRef, useState } from "react";
import { taskContext } from "../context/TasksContext";

const AddTask = ({ isOpen, onClose }) => {
  // getting value from TasksContext Api
  const { taskState, setTask, HandleSubmit } = useContext(taskContext);

  const initialRef = useRef(null);

  return (
    <>
      <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add your task</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Title</FormLabel>
              <Input
                ref={initialRef}
                placeholder="Title"
                onChange={(e) =>
                  setTask({ ...taskState, title: e.target.value })
                }
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Description</FormLabel>
              <Input
                placeholder="Description"
                onChange={(e) =>
                  setTask({ ...taskState, description: e.target.value })
                }
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={() => (HandleSubmit(), onClose())}
            >
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
export default AddTask;
