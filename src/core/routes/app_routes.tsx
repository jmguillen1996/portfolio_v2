import { InitialRoute, HomeRoute, VisionFrameRoute, TourneyKeyRoute, JumpspeakRoute } from "./route_constants";
import HomePage from "../../features/presentation/pages/home/home";
import VisionFramePage from "../../features/presentation/pages/projects/visionframe_page";
import TourneyKeyPage from "../../features/presentation/pages/projects/tourneykey_page";
import JumpspeakPage from "../../features/presentation/pages/projects/jumpspeak_page";
import { createBrowserRouter } from "react-router-dom";

export const AppRoutes = createBrowserRouter([
  { path: `${InitialRoute}`, element: <HomePage /> },
  { path: `${HomeRoute}`, element: <HomePage /> },
  { path: `${VisionFrameRoute}`, element: <VisionFramePage /> },
  { path: `${TourneyKeyRoute}`, element: <TourneyKeyPage /> },
  { path: `${JumpspeakRoute}`, element: <JumpspeakPage /> },
]);
