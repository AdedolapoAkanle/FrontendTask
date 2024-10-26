import { POSTS } from "../actions";

const INITIAL_STATE = {
  postState: {
    posts: [], 
    search:""
  },
};

const PostsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case POSTS:
      return { ...state, postState: action.payload };

    default:
      return state;
  }
};

export default PostsReducer;