import { all, fork } from "redux-saga/effects";
import { watchLoadCharacters } from "../characters/sagas";

export function* rootSaga() {
  yield all([fork(watchLoadCharacters)]);
}
