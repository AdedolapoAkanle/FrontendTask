import { combineReducers, createStore } from "redux";
import UsersReducer from "./UsersReducer";
import PostsReducer from "./PostsReducer";
import TodosReducer from "./TodosReducer";
import AlbumsReducer from "./AlbumReducer";
import SettingsReducer from "./SettingsReducer";
import HeaderReducer from "./HeaderReducer";

const joinReducers = combineReducers({
  user: UsersReducer,
  post: PostsReducer,
  todo: TodosReducer,
  album: AlbumsReducer,
  settings: SettingsReducer,
  header: HeaderReducer
});

export const store = createStore(
  joinReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);