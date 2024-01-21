import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Pokemon from "./pages/Pokemon.tsx";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { api } from "./store/api.ts";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: ":pokemonName",
        element: <Pokemon />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ApiProvider api={api}>
      <RouterProvider router={routes} />
    </ApiProvider>
  </React.StrictMode>,
);
