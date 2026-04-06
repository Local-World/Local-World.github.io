import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { News } from "./pages/News";
import { NewsArticle } from "./pages/NewsArticle";
import { Reportajes } from "./pages/Reportajes";
import { Portfolio } from "./pages/Portfolio";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "noticias", Component: News },
      { path: "noticias/:id", Component: NewsArticle },
      { path: "reportajes", Component: Reportajes },
      { path: "portfolio", Component: Portfolio },
    ],
  },
]);
