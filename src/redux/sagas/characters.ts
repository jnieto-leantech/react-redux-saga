import { axiosFetchCharacters } from "api/characters/axiosFetchCharacters";
import { fetchCharacters } from "api/characters/fetchCharacters";
import { call, put, takeEvery } from "redux-saga/effects";
import { loadCharacters } from "redux/actions/characters";
import { CharacterModule } from "types/character";
import { mockOrApiResponse } from "utils/mockOrAPIResponse";

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
