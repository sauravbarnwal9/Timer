import React, { createContext, useState } from "react";
export const taskContext = createContext();

const TaskContextProvider = ({ children }) => {
  const [data, SetData] = useState([]);
  const [taskState, setTask] = useState({
    id: data.length + 1,
    title: "",
    description: "",
    time_tracked: "",
  });

  // Handle submission when user add task;
  const HandleSubmit = () => {
    SetData([...data, taskState]);
  };
  const value = { taskState, setTask, HandleSubmit, data };
  return <taskContext.Provider value={value}>{children}</taskContext.Provider>;
};

export default TaskContextProvider;
