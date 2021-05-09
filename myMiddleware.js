const myCustomMiddleware = ({ dispatch, getState }) => next => action => {
  console.log("dispatching", action);
  let result = next(action);
  console.log("next state", getState());
  return result;
};

export default myCustomMiddleware;
