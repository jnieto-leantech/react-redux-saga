import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./reducers";
import { characterSaga } from "./sagas/characters";
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

sagaMiddleware.run(characterSaga);

export { createStore };
