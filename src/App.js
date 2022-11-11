import logo from "./logo.svg";
import "./App.css";
import { Center, Stack, Box } from "@chakra-ui/react";
import Timer from "./components/Timer";
import Homepage from "./pages/homepage";

function App() {
  return (
    <Box>
      <Homepage />
    </Box>
  );
}

export default App;
