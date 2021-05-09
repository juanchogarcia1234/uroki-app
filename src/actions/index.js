import uroki from "../api/uroki";
import history from "../history";

export const logIn = (user, password) => {
  return async function (dispatch, getState, extraArgument) {
    const response = await uroki.post("/auth", {
      user,
      password
    });
    if (response.data === "") {
      console.log("no user");
      console.log(document.getElementById("errorMessage"));
      document.getElementById("errorMessage").classList.add("errorMessage");
      return;
    }
    //Después de esto los componentes se renderizan de nuevo?
    dispatch({
      type: "LOG_IN",
      payload: {
        token: response.data
      }
    });
    history.push("/");
  };
};

export const logOut = () => {
  return {
    type: "LOG_OUT",
    payload: {
      token: null
    }
  };
};
