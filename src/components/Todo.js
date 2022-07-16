import { Box, Checkbox, Text } from "@chakra-ui/react";
import { useState } from "react";

function Todo({todo}) {
  const [checked, setChecked] = useState(false)

  return (
    <Box mb={1} bgColor='rgb(191, 225, 235)' p={2}>
      <Checkbox colorScheme='teal' isChecked={checked}>
        <Text as={todo.completed && 'del'}>{todo.content}</Text>
      </Checkbox>
    </Box>
  );
}

export default Todo;
 