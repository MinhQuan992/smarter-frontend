import { useMutation } from "react-query";
import { signIn } from "../../../services/authentication-service";

export const useSignInMutation = () => {
  const { mutate: signInFunction, status, ...restSignIn } = useMutation(signIn);
  return { signInFunction, status, restSignIn };
};
