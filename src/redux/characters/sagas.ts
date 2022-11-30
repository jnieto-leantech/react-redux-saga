import { axiosFetchCharacters } from "api/characters/axiosFetchCharacters";
import { call, put, takeEvery } from "redux-saga/effects";
import { loadCharacters } from "./actionCreators";
import { CharacterModule } from "types/character";

const { LOAD_CHARACTERS } = CharacterModule.Redux.Actions;

function* workerLoadCharacters() {
  try {
    const response: CharacterModule.Character[] = yield call(
      axiosFetchCharacters
    );
    yield put(loadCharacters(response));
  } catch (e) {
    yield put;
  }
}

export function* watchLoadCharacters() {
  yield takeEvery(LOAD_CHARACTERS, workerLoadCharacters);
}
