import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { getAuthorizationHeader, removeAccessToken } from "../utils/token-util";

const createApiClient = (baseURL: string) => {
  const client = axios.create({
    baseURL: baseURL,
  });

  const authorizationHeader = getAuthorizationHeader();
  if (authorizationHeader.Authorization) {
    client.interceptors.request.use((request: AxiosRequestConfig) => {
      request.headers = {
        ...request.headers,
        ...authorizationHeader,
      };
      return request;
    });
  }

  client.interceptors.response.use(
    (response: AxiosResponse) => response,
    (error: AxiosError) => {
      const status = error.response?.status;

      if (status === 401 || status === 403) {
        removeAccessToken();
        window.location.replace("/");
      }

      return Promise.reject(error);
    }
  );

  return client;
};

export const getServerApi = () => {
  return createApiClient("http://smarter-be.herokuapp.com/smarter/api/v1");
};
