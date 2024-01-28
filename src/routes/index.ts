import { useRoutes } from "react-router-dom";
import MainRoutes from "./routes";

const Routes = () => {
  return useRoutes([MainRoutes]);
};

export default Routes;
