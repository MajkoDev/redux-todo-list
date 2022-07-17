import { Container, Heading } from "@chakra-ui/react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import Filter from "./components/Filter";

function App() {
  return (
    <div className="App">
      <Container maxW="container.md">
        <Heading my="4">Todo List</Heading>
        <AddTodo />
        <TodoList />
        <Filter />
      </Container>
    </div>
  );
}

export default App;
