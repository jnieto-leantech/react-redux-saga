import { createSelector } from "reselect";
import { CharacterModule } from "types/character";

const getLoading = (state: CharacterModule.Redux.State) => state.loading;

const getCharacters = (state: CharacterModule.Redux.State) => state.characters;

export const getLoadingSelector = createSelector(getLoading, (todos) => todos);

export const getCharactersSelector = createSelector(
  getCharacters,
  (pending) => pending
);
