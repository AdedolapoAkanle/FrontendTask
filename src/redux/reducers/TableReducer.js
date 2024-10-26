import { TABLE } from "../actions";

const INITIAL_STATE = {
  tableState: {
    currentPage: 1,
    selectedRow: null,
    search:""
  },
};

const TableReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TABLE:
      return { ...state, tableState: action.payload };

    default:
      return state;
  }
};

export default TableReducer;