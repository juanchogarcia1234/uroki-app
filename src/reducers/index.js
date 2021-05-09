import { combineReducers } from "redux";

const userAuth = (oldToken = null, action) => {
  if (action.type === "LOG_IN") {
    //WE CARE
    return action.payload.token;
  } else if (action.type === "LOG_OUT") {
    //WE CARE
    return null;
  }
  return oldToken;
};

export default combineReducers({
  token: userAuth
});
