import { APIModule } from "types/api";
import { CharacterModule } from "types/character";

export const fetchCharacters = async ({
  mockOrApiResponse,
}: {
  mockOrApiResponse: Function;
}): Promise<{
  errors: APIModule.Error[];
  characters: CharacterModule.Character[];
}> => {
  let errors: APIModule.Error[] = [];
  let characters = [];

  try {
    const res = await mockOrApiResponse(
      "characters",
      "https://rickandmortyapi.com/api/character",
      {}
    );

    if (res && res.status === 200 && res.data?.results) {
      characters = res.data.results;
    }
  } catch (err) {
    errors.push({
      message: "Unexpected Error",
      code: -1,
    });
  }

  return { errors, characters };
};
