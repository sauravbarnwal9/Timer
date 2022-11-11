import {
  Box,
  Button,
  ButtonGroup,
  Center,
  Container,
  Spacer,
  useDisclosure,
} from "@chakra-ui/react";

import { useContext, useRef, useState } from "react";
import { taskContext } from "../context/TasksContext";
import AddTask from "../modals/TaskModal";
const Timer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { taskState, setTask } = useContext(taskContext);
  let [Sec, setSec] = useState("00");
  let [Min, setMin] = useState("00");
  let [Hour, setHour] = useState("00");

  // handling disable button;
  let [disable, SetDisable] = useState({
    start: false,
    pause: false,
  });

  let ref = useRef(null);

  // Handling Pause button
  const HandlePause = () => {
    SetDisable({ ...disable, start: false, pause: true });

    clearInterval(ref.current);
    ref.current = null;
  };

  // Handling Save button
  const HandleSave = () => {
    SetDisable({ ...disable, start: false, pause: false });
    setTask({ ...taskState, time_tracked: `${Hour}:${Min}:${Sec}` });
    onOpen();
    clearInterval(ref.current);
    ref.current = null;
    setSec("00");
    setMin("00");
    setHour("00");
  };

  // When user click start button than this function call
  const HandleStart = () => {
    SetDisable({ ...disable, start: true, pause: false });
    if (!ref.current) {
      ref.current = setInterval(() => {
        setSec((sec) => {
          // Converting string into Number
          sec = +sec;
          if (sec < 9) {
            return "0" + (sec + 1);
          } else {
            return sec + 1;
          }
        });
      }, 1000);
    }
  };

  // For changing in minutes if second is greater than 59

  if (Sec > 59) {
    // Converting string into Number
    Min = +Min;
    setSec("00");
    if (Min < 9) {
      setMin("0" + Min + 1);
    } else {
      setMin(Min + 1);
    }
  }

  // For changing in hours if minutes is greater than 59
  if (Min > 59) {
    setMin("00");
    Hour = +Hour;
    if (Hour < 9) {
      setHour("0" + Hour + 1);
    } else {
      setHour(Hour + 1);
    }
  }

  return (
    <Center>
      <AddTask isOpen={isOpen} onClose={onClose} />
      <Box
        w="30%"
        h="200px"
        border="1px"
        borderColor="gray.600"
        maxW="sm"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
      >
        <Center w="100%" fontSize={46}>
          {Hour}:{Min}:{Sec}
        </Center>

        <Center mt="3rem">
          <ButtonGroup gap="4">
            <Button
              disabled={disable.start}
              colorScheme="teal"
              variant="outline"
              onClick={HandleStart}
            >
              start
            </Button>
            <Button
              disabled={disable.pause}
              colorScheme="teal"
              variant="outline"
              onClick={HandlePause}
            >
              pause
            </Button>
            <Button colorScheme="teal" variant="outline" onClick={HandleSave}>
              save
            </Button>
          </ButtonGroup>
        </Center>
      </Box>
    </Center>
  );
};
export default Timer;
