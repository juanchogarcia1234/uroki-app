import { combineReducers } from "redux";

const userAuth = (oldToken = null, action) => {
  if (action.type === "LOGGED_IN") {
    //WE CARE
    return action.payload;
  } else if (action.type === "LOGGED_OUT") {
    //WE CARE
    return null;
  }
  return oldToken;
};

const classesReducer = (classes = [], action) => {
  if (action.type === "FETCHED_CLASSES") {
    return action.payload;
  }

  return classes;
};

export default combineReducers({
  token: userAuth,
  classes: classesReducer
});
