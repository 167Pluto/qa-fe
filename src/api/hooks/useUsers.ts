import { useQuery } from "@tanstack/react-query";
import { getAllUsers } from "../services/users";

const useUsers = () => {
  return useQuery(["users"], getAllUsers, {
    onSuccess(data) {
      data.forEach((user) => {
        console.log(user.password, "💀💀💀💀");
      });
    },
  });
};

export default useUsers;
