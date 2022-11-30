import { APIModule } from "./api";

export namespace CharacterModule {
  export interface Character {
    id: number;
    name: string;
    status: Status;
    species: Species;
    type: string;
    gender: Gender;
    origin: Location;
    location: Location;
    image: string;
    episode: string[];
    url: string;
    created: string;
  }

  export enum Gender {
    Female = "Female",
    Male = "Male",
    Unknown = "unknown",
  }

  export interface Location {
    name: string;
    url: string;
  }

  export enum Species {
    Alien = "Alien",
    Human = "Human",
  }

  export enum Status {
    Alive = "Alive",
    Dead = "Dead",
    Unknown = "unknown",
  }

  export namespace Redux {
    export type State = {
      characters: CharacterModule.Character[];
      loading: boolean;
      error?: APIModule.Error;
    };

    export enum Actions {
      START_LOADING = "START_LOADING",
      STOP_LOADING = "STOP_LOADING",
      LOAD_CHARACTERS = "LOAD_CHARACTERS",
      ON_LOAD_CHARACTER_SUCCESS = "ON_LOAD_CHARACTER_SUCCESS",
      ON_LOAD_CHARACTER_ERROR = "ON_LOAD_CHARACTER_ERROR",
    }

    export type StartLoadingAction = {
      type: Actions.START_LOADING;
    };

    export type StopLoadingAction = {
      type: Actions.STOP_LOADING;
    };

    export type LoadCharactersAction = {
      type: Actions.LOAD_CHARACTERS;
      payload: Character[];
    };

    export type OnLoadCharacterSuccessAction = {
      type: Actions.ON_LOAD_CHARACTER_SUCCESS;
      payload: Character[];
    };

    export type LoadCharacterErrorAction = {
      type: Actions.ON_LOAD_CHARACTER_ERROR;
      payload: APIModule.Error;
    };

    export type Action =
      | StartLoadingAction
      | StopLoadingAction
      | OnLoadCharacterSuccessAction
      | LoadCharactersAction
      | LoadCharacterErrorAction;
  }
}
