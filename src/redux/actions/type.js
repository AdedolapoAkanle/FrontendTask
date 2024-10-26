import { ALBUMS, HEADER, POSTS, SETTINGS, TODOS, USERS } from ".";

export const UserAction = (param) => {
  return {
    type: USERS,
    payload: param,
  };
};

export const PostAction = (param) => {
  return {
    type: POSTS,
    payload: param,
  };
};

export const TodoAction = (param) => {
  return {
    type: TODOS,
    payload: param,
  };
};

export const AlbumAction = (param) => {
  return {
    type: ALBUMS,
    payload: param,
  };
};

export const SettingsAction = (param) => {
  return {
    type: SETTINGS,
    payload: param,
  };
};

export const HeaderAction = (param) => {
  return {
    type: HEADER,
    payload: param,
  };
};
