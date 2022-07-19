import { AxiosResponse } from "axios";
import { SignInPayload } from "../containers/sign-in-page";
import { setAccessToken } from "../utils/token-util";
import { getServerApi } from "./http-service";

export const signIn = async (payload: SignInPayload) => {
  interface SignInResponse {
    token: string;
    expirationTime: number;
  }

  const response: AxiosResponse<SignInResponse> = await getServerApi().post(
    "/authentication/login",
    payload
  );
  const token = response.data.token;

  if (token) {
    setAccessToken(token);
    return {
      token,
    };
  }
  return {};
};
