import { InitialRoute, HomeRoute, VisionFrameRoute } from "./route_constants";
import HomePage from "../../features/presentation/pages/home/home";
import VisionFramePage from "../../features/presentation/pages/projects/visionframe_page";
import { createBrowserRouter } from "react-router-dom";

export const AppRoutes = createBrowserRouter([
  { path: `${InitialRoute}`, element: <HomePage /> },
  { path: `${HomeRoute}`, element: <HomePage /> },
  { path: `${VisionFrameRoute}`, element: <VisionFramePage /> },
]);
