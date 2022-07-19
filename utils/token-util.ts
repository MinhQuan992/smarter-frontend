const ACCESS_TOKEN = "ACCESS_TOKEN";

export const getAccessToken = () => {
  return window.sessionStorage.getItem(ACCESS_TOKEN);
};

export const setAccessToken = (accessToken: string) => {
  return window.sessionStorage.setItem(ACCESS_TOKEN, accessToken);
};

export const removeAccessToken = () => {
  return window.sessionStorage.removeItem(ACCESS_TOKEN);
};

export const getAuthorizationHeader = () => {
  const token = getAccessToken();
  if (!token) {
    return {};
  }
  return {
    Authorization: `Bearer ${token}`,
  };
};
