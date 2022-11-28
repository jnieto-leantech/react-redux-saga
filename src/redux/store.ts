import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./reducers/root";

export const createStore = () => configureStore({ reducer: rootReducer });
