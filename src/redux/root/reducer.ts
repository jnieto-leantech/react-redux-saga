import { combineReducers } from "redux";
import { characterReducer } from "../characters/reducers";

export const rootReducer = combineReducers({ characters: characterReducer });
