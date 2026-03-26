import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { News } from "./pages/News";
import { Reportajes } from "./pages/Reportajes";
import { Portfolio } from "./pages/Portfolio";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "noticias", Component: News },
      { path: "reportajes", Component: Reportajes },
      { path: "portfolio", Component: Portfolio },
    ],
  },
]);
