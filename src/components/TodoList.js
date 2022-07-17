import { Box } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import getTodosByFilter from "../redux/selector";
import Todo from "./Todo";

const TodoList = () => {
  const { todos, Filter } = useSelector((state) => state);
  const filterTodos = getTodosByFilter(todos, Filter);

  return (
    <Box my={3}>
      {filterTodos.length ? (
        filterTodos.map((todo) => <Todo key={`todo-${todo.id}`} todo={todo} />)
      ) : (
        <Box textAlign="center" my="4">
          No Todos Yay!
        </Box>
      )}
    </Box>
  );
};

export default TodoList;
