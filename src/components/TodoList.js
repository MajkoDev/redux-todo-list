import { Box } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import Todo from "./Todo";

const TodoList = () => {
  const { todos } = useSelector((state) => state);

  return (
    <Box>
      {!todos.lenght ? (
        todos.map((todo) => <Todo key={`todo-${todo.id}`} todo={todo} />)
      ) : (
        <Box textAlign="center" my="4">No Todos Yay!</Box>
      )}
    </Box>
  );
};

export default TodoList;
