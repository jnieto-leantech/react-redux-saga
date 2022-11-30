import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./reducers";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./sagas";

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
