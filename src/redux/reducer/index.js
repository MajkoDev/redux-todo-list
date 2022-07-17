import { combineReducers } from "@reduxjs/toolkit";
import Filter from "./filter";
import todos from "./todos";

export default combineReducers({
  todos,
  Filter,
});
