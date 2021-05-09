import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import "semantic-ui-css/semantic.min.css";
import "./globals.css";
import App from "./components/App";
import reducers from "./reducers";
import myCustomMiddleware from "../myMiddleware";
import { composeWithDevTools } from "redux-devtools-extension";

const composedEnhancer = composeWithDevTools(applyMiddleware(myCustomMiddleware, thunk));

const store = createStore(reducers, composedEnhancer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

console.log("Hello World!");
