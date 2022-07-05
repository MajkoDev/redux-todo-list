import { Container, Heading } from "@chakra-ui/react";
import AddTodo from "./components/AddTodo";

function App() {
  return (
    <div className="App">
      <Container maxW="container.md">
        <Heading my="4">Todo List</Heading>

        <AddTodo />
      </Container>
    </div>
  );
}

export default App;
