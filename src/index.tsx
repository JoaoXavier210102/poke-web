import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./global.scss"

//Providers
import { PokemonModalProvider } from './providers/pokemonModal';
import { OpenModalProvider } from "./providers/openModal";
import { PokemonsProvider } from "./providers/pokemons";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <PokemonsProvider>
      <PokemonModalProvider>
        <OpenModalProvider>
          <App />
        </OpenModalProvider>
      </PokemonModalProvider>
    </PokemonsProvider>
  </React.StrictMode>
);
