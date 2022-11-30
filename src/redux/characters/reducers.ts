import { CharacterModule } from "types/character";
import { initialState } from "./state";

const {
  ON_LOAD_CHARACTER_ERROR,
  ON_LOAD_CHARACTER_SUCCESS,
  START_LOADING,
  STOP_LOADING,
} = CharacterModule.Redux.Actions;

export const characterReducer = (
  state = initialState,
  action: CharacterModule.Redux.Action
) => {
  switch (action.type) {
    case ON_LOAD_CHARACTER_SUCCESS:
      return { ...state, characters: action.payload };
    case ON_LOAD_CHARACTER_ERROR:
      return { ...state, error: action.payload };
    case START_LOADING:
      return { ...state, loading: true };
    case STOP_LOADING:
      return { ...state, loading: false };
    default:
      return { ...state };
  }
};
