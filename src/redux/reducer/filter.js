import { FILTER } from "../../constants";
import { SET_FILTER } from "../actionsTypes";

const initialState = FILTER.ALL;

const Filter = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTER: {
      return action.payload.filter;
    }
    default: {
      return state;
    }
  }
};

export default Filter;
