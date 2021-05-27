import uroki from "../api/uroki";
import history from "../history";
import { formatDateToDB } from "../helpers";

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

export const logOut = () => {
  return {
    type: "LOGGED_OUT",
    payload: null
  };
};

export const fetchClasses = (week, token) => {
  console.log("semanita", week);
  let dates = week.map(day => formatDateToDB(day));

  console.log("dates", dates);

  return async function (dispatch, getState, extraArgument) {
    const response = await uroki.get(`/classes?dates=${dates}`, {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    });
    console.log("las clases", response.data);

    dispatch({
      type: "FETCHED_CLASSES",
      payload: response.data
    });
  };
};
