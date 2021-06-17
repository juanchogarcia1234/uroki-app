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

const setDataStatus = (status = null, action) => {
  if (action.type === "FETCH_CLASSES_STARTED") {
    console.log("empieza la llmaada");
    return "pending";
  } else if (action.type === "FETCH_CLASSES_SUCCED") {
    return null;
  }

  return null;
};

export default combineReducers({
  token: userAuth,
  classes: classesReducer,
  dataStatus: setDataStatus
});
