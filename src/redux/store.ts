import { configureStore } from "@reduxjs/toolkit";
import { rootReducer, rootSaga } from "./root";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();

const createStore = () =>
  configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => [
      ...getDefaultMiddleware(),
      sagaMiddleware,
    ],
  });

sagaMiddleware.run(rootSaga);

export { createStore };
