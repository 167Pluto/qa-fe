import { useEffect } from "react";
import useAuthStore from "../store/authStore";
import { useNavigate } from "react-router-dom";
import { Box, Button, Card, Divider, Stack, Typography } from "@mui/material";
import useUsers from "~/api/hooks/useUsers";
import useDeleteLuser from "~/api/hooks/useDeleteLuser";

const Home = () => {
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  const logout = useAuthStore((state) => state.removeUser);
  const navigate = useNavigate();

  const { data } = useUsers();

  const { mutate } = useDeleteLuser();

  useEffect(() => {
    if (!isLoggedIn) navigate("/login");
  }, [isLoggedIn, navigate]);

  if (!data) return null;

  return (
    <Box width="100%">
      <Typography>Wellcome user! Feel free to check out this users!</Typography>
      <Button fullWidth variant="contained" color="primary" onClick={logout}>
        Log out
      </Button>
      <Stack gap="3rem" mt="2rem">
        {data.map((user) => (
          <Card key={user.id} sx={{ p: "1.5rem" }}>
            <Typography>{user.username}</Typography>
            <Typography>{user.email}</Typography>
            <Divider sx={{ mt: "1.5rem", mb: "1.25rem" }} />
            <Button
              variant="contained"
              color="error"
              onClick={() => mutate(user.id)}
            >
              Delete
            </Button>
          </Card>
        ))}
      </Stack>
    </Box>
  );
};

export default Home;
