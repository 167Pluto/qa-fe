import { UseMutationResult, useMutation } from "@tanstack/react-query";
import useAuthStore from "../../store/authStore";
import { login } from "../services/auth";

const useLogin = (): UseMutationResult<LoginResponse, Error, LoginProps> => {
  const saveUser = useAuthStore((state) => state.saveUser);

  return useMutation(login, {
    onSuccess(data) {
      console.log(data);
      saveUser(data.token, Number(data.tokenExpirationTime));
    },
  });
};
export default useLogin;
