import { axiosFetchCharacters } from "api/characters/axiosFetchCharacters";
import { call, put, takeEvery } from "redux-saga/effects";
import {
  onLoadCharacterError,
  onLoadCharacterSuccess,
  startLoading,
  stopLoading,
} from "./actionCreators";
import { CharacterModule } from "types/character";

const { LOAD_CHARACTERS } = CharacterModule.Redux.Actions;

function* workerLoadCharacters() {
  try {
    yield put(startLoading());

    const response: CharacterModule.Character[] = yield call(
      axiosFetchCharacters
    );
    yield put(onLoadCharacterSuccess(response));
  } catch (e) {
    yield put(onLoadCharacterError({ message: "Unexpected error", code: -1 }));
  }

  yield put(stopLoading());
}

export function* watchLoadCharacters() {
  yield takeEvery(LOAD_CHARACTERS, workerLoadCharacters);
}
