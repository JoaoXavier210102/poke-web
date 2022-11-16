import { createContext, ReactNode, useState, useContext } from "react";
import {useMediaQuery} from "react-responsive";

type Pokemons = {
    pokemons: number[];
    setPokemons: (pokemon: number[]) => void;
}

const PokemonsContext = createContext<Pokemons>({
    pokemons: [],
    setPokemons: () => {}
});


export const PokemonsProvider = ({ children }: { children: ReactNode }) => {
  
  const isMobile = useMediaQuery({ query: '(max-width: 480px)' });
  const [pokemons, setPokemons] = useState<number[]>(Array.from({ length: isMobile ? 10 : 32 }, (_, i) => i + 1));

  return (
    <PokemonsContext.Provider value={{pokemons, setPokemons}}>
      {children}
    </PokemonsContext.Provider>
  );
};

export const usePokemons = () => useContext(PokemonsContext);