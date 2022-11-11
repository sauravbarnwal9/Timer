import { Box, Center } from "@chakra-ui/react";
import React from "react";
import Task from "../components/Task";
import Timer from "../components/Timer";

function Homepage() {
  return (
    <Box bgColor={"purple.300"} h="650px">
      {/* Timer Section */}
      <Box m="3rem" mt="0rem">
        <h1>
          <b>Timer Section : </b>
        </h1>
      </Box>
      <Timer />

      {/* Tasks Section */}
      <Box m="3rem">
        <h1>
          <b>Tasks Section : </b>
        </h1>
      </Box>

      <Task />
    </Box>
  );
}

export default Homepage;
