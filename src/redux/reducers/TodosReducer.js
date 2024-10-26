import { TODOS } from "../actions";

const INITIAL_STATE = {
  todoState: {
    todos: [],
    search: "",
  },
};

const TodosReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TODOS:
      return { ...state, todoState: action.payload };

    default:
      return state;
  }
};

export default TodosReducer;