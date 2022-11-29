import axios from "axios";

export const mockOrApiResponse = async (
  mockName: string,
  requestUrl: string,
  requestParameters?: { [key: string]: string | number | boolean }
): Promise<Record<string, any> | undefined> => {
  if (process.env.REACT_APP_USE_MOCKS === "true") {
    const module = await import(`../mocks/${mockName}.json`);
    return module.default;
  }

  return axios({
    method: "get",
    url: requestUrl,
    params: requestParameters,
  });
};
