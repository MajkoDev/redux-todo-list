import { Box } from "@chakra-ui/react";
import { useSelector } from "react-redux";

const TodoList = () => {
  const { todos } = useSelector((state) => state);
  return (
    <Box textAlign="center" my="4">
      No Todos Yay!
    </Box>
  );
};

export default TodoList;
