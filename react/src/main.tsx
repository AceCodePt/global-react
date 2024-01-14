import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import React from "react";
import PokemonPage from "./pages/Pokemon/PokemonPage.tsx";
import PokemonAbilityPage from "./pages/PokemonAbility/PokemonAbilityPage.tsx";
import PokemonLayout from "./pages/PokemonLayout/PokemonLayout.tsx";
import CounterPage from "./counter/CounterPage.tsx";
import MainForm from "./pages/Form/MainForm.tsx";

const router = createBrowserRouter([
  {
    path: "counter",
    element: (
      <>
        <CounterPage />
      </>
    ),
  },
  {
    path: "form",
    element: (
      <>
        <MainForm />
      </>
    ),
  },
  {
    path: "login",
    element: (
      <>
        <Login />
      </>
    ),
  },
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/pokemon",
    element: <PokemonLayout />,
    children: [
      {
        path: "/pokemon/:pokemonName",
        element: <PokemonPage />,
      },
    ],
  },
  {
    path: "/pokemon/:pokemonName/ability/:abilityId",
    element: <PokemonAbilityPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
