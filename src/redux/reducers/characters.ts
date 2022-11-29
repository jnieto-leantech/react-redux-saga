import { CharacterModule } from "types/character";
import { initialState } from "redux/state/character";

const { LOAD_CHARACTERS, START_LOADING, STOP_LOADING } =
  CharacterModule.Redux.Actions;

export const characterReducer = (
  state = initialState,
  action: CharacterModule.Redux.Action
) => {
  switch (action.type) {
    case LOAD_CHARACTERS:
      return { ...state, characters: action.payload };
    case START_LOADING:
      return { ...state, loading: true };
    case STOP_LOADING:
      return { ...state, loading: false };
    default:
      return { ...state };
  }
};
