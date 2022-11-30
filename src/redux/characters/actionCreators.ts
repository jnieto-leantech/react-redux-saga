import { APIModule } from "types/api";
import { CharacterModule } from "types/character";

const {
  ON_LOAD_CHARACTER_ERROR,
  ON_LOAD_CHARACTER_SUCCESS,
  LOAD_CHARACTERS,
  START_LOADING,
  STOP_LOADING,
} = CharacterModule.Redux.Actions;

export const onLoadCharacterSuccess = (
  newCharacters: CharacterModule.Character[]
) => ({
  type: ON_LOAD_CHARACTER_SUCCESS,
  payload: newCharacters,
});

export const loadCharacters = () => ({
  type: LOAD_CHARACTERS,
});

export const onLoadCharacterError = (error: APIModule.Error) => ({
  type: ON_LOAD_CHARACTER_ERROR,
  payload: error,
});

export const startLoading = () => ({
  type: START_LOADING,
});

export const stopLoading = () => ({
  type: STOP_LOADING,
});
