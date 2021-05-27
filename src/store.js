import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from "redux-persist";
import reducers from "./reducers";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage
};

const persistedReducer = persistReducer(persistConfig, reducers);

const composedEnhancer = composeWithDevTools(applyMiddleware(thunk));

export default () => {
  let store = createStore(persistedReducer, composedEnhancer);
  let persistor = persistStore(store);
  return { store, persistor };
};
