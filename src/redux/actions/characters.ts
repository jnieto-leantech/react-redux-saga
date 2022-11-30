import { CharacterModule } from "types/character";

const { LOAD_ERROR: ERROR, LOAD_CHARACTERS } = CharacterModule.Redux.Actions;

export const loadCharacters = (newCharacters: CharacterModule.Character[]) => ({
  type: LOAD_CHARACTERS,
  payload: newCharacters,
});

export const characterError = (newCharacters: CharacterModule.Character[]) => ({
  type: ERROR,
  payload: newCharacters,
});
