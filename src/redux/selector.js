import { FILTER } from "../constants";

const getTodosByFilter = (store, Filter) => {
  switch (Filter) {
    case FILTER.COMPLETED:
      return store.todos.filter((todo) => todo.completed);
    case FILTER.INCOMPLETED:
      return store.todos.filter((todo) => !todo.completed);
    default:
      return store.todos;
  }
};

export default getTodosByFilter;
