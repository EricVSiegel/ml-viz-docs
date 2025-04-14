import { App } from "./app";
import { ErrorPage } from "./pages/ErrorPage";
import PageA from "./pages/PageA.mdx";
import { createBrowserRouter } from "react-router";

export const Routers = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <PageA />,
      },
    ],
  },
]);
