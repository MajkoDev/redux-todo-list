import { Button, Flex, FormControl, Input } from "@chakra-ui/react";
import { useState } from "react";

const AddTodo = () => {
  const [value, setValue] = useState("");

  const handleInput = (e) => {
    setValue(e.target.value);
  };

  return (
    <form>
      <Flex>
        <FormControl>
          <Input type="text" onChange={handleInput} />
        </FormControl>
        <Button colorScheme="teal" type="submit" disabled={!value}>
          Add Todo
        </Button>
      </Flex>
    </form>
  );
};

export default AddTodo;
