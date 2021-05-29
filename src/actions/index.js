import { createAction, createActions } from "redux-actions";
import uroki from "../api/uroki";
import history from "../history";
import { formatDateToDB } from "../helpers";

const exampleActionCreator = createAction("ACTION_CALLED");
console.log(exampleActionCreator("este es el payload"));

export const logIn = (user, password, mensajeError) => {
  return async function (dispatch, getState, extraArgument) {
    const response = await uroki.post("/auth", {
      user,
      password
    });
    if (response.data === null) {
      mensajeError.current.style.display = "block";
      return;
    }
    //Después de esto los componentes se renderizan de nuevo?
    dispatch({
      type: "LOGGED_IN",
      payload: response.data
    });
    history.push("/");
  };
};

export const logOut = createAction("LOGGED_OUT");

export const fetchClasses = (week, token) => {
  let dates = week.map(day => formatDateToDB(day));

  return async function (dispatch, getState, extraArgument) {
    const response = await uroki.get(`/classes?dates=${dates}`, {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    });

    dispatch({
      type: "FETCHED_CLASSES",
      payload: response.data
    });
  };
};
