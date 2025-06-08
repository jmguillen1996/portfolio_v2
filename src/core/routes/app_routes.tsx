import { InitialRoute, HomeRoute } from "./route_constants";
import HomePage from "../../features/presentation/pages/home/home";
import { createBrowserRouter } from "react-router-dom";

export const AppRoutes = createBrowserRouter([
  { path: `${InitialRoute}`, element: <HomePage /> },
  { path: `${HomeRoute}`, element: <HomePage /> },
]);
