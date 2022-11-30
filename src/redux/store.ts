import { configureStore } from "@reduxjs/toolkit";
import { rootReducer, rootSaga } from "./root";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";

const devMode = process.env.NODE_ENV === "development";

const sagaMiddleware = createSagaMiddleware();

const createStore = () => {
  const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => {
      const middleware = [...getDefaultMiddleware(), sagaMiddleware];

      if (devMode) {
        middleware.push(logger);
      }

      return middleware;
    },
  });

  sagaMiddleware.run(rootSaga);

  return store;
};

export { createStore };
