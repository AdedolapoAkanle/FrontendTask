import { HEADER } from "../actions";

const INITIAL_STATE = {
  headerState: {
    isDarkMode: false
  },
};

const HeaderReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case HEADER:
      return { ...state, headerState: action.payload };

    default:
      return state;
  }
};

export default HeaderReducer;