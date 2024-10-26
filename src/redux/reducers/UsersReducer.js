import { USERS } from "../actions";

const INITIAL_STATE = {
  userState: {
    users:[],
    search:""
  },
};

const UsersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USERS:
      return { ...state, userState: action.payload };

    default:
      return state;
  }
};

export default UsersReducer;