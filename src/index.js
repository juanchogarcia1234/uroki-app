import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "semantic-ui-css/semantic.min.css";
import "./globals.css";
import App from "./components/App";
import storeCreator from "./store";
import { PersistGate } from "redux-persist/integration/react";

const { store, persistor } = storeCreator();

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
