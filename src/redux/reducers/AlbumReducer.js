import { ALBUMS } from "../actions";

const INITIAL_STATE = {
  albumState: {
    albums: [],
    search: ""
  },
};

const AlbumsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ALBUMS:
      return { ...state, albumState: action.payload };

    default:
      return state;
  }
};

export default AlbumsReducer;