import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteUser } from "../services/users";

const useDeleteLuser = () => {
  const queryClient = useQueryClient();

  return useMutation(deleteUser, {
    onSuccess() {
      queryClient.invalidateQueries(["users"]);
    },
  });
};

export default useDeleteLuser;
