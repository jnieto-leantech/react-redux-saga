import axios from "axios";
import { CharacterModule } from "types/character";

export const axiosFetchCharacters = (): Promise<CharacterModule.Character[]> =>
  axios
    .get("https://rickandmortyapi.com/api/character")
    .then((res) => res.data.results);
