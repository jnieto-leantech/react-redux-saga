import { takeEvery } from "redux-saga/effects";
import { CharacterModule } from "types/character";

const { LOAD_CHARACTERS } = CharacterModule.Redux.Actions;

export function* characterSaga() {
  console.log("hello?");
  yield "hello?";
}

export function* workerLoadCharacters() {}

export function* watcherLoadCharacters() {
  yield takeEvery(LOAD_CHARACTERS, workerLoadCharacters);
}
