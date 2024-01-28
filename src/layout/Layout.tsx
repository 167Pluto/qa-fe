import { Box, LinearProgress, styled } from "@mui/material";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

const LoaderWrapper = styled("div")(({ theme }) => ({
  position: "fixed",
  top: 0,
  left: 0,
  zIndex: 2001,
  width: "100%",
  "& > * + *": {
    marginTop: theme.spacing(2),
  },
}));

const Loader = () => (
  <LoaderWrapper>
    <LinearProgress color="primary" />
  </LoaderWrapper>
);

const Layout = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Box
        sx={{ alignItems: "center", justifyContent: "center", display: "flex" }}
      >
        <Box
          sx={{
            maxWidth: "600px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            py: "4rem",
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </Suspense>
  );
};

export default Layout;
