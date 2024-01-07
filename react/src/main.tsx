import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import React from 'react';
import PokemonPage from './pages/PokemonPage.tsx';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
    },
    {
        path: "/pokemon/:pokemonName",
        element: <PokemonPage/>,
    },
    {
        path: "/pokemon/:pokemonName/ability/:abilityId",
        element: <AbilityPage/>
    }
  ]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)
