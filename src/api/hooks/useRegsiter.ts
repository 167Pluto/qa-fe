import { UseMutationResult, useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { register } from "~/api/services/auth";

const useRegister = (): UseMutationResult<void, Error, RegisterProps> => {
  const navigate = useNavigate();

  return useMutation(register, {
    onSuccess() {
      navigate("/login");
    },
  });
};

export default useRegister;
