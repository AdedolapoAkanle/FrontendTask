import { SETTINGS } from "../actions";

const INITIAL_STATE = {
  settingState: {
    
  },
};

const SettingsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SETTINGS:
      return { ...state, settingState: action.payload };

    default:
      return state;
  }
};

export default SettingsReducer;