import { createContext, ReactNode, useState, useContext } from "react";

type Pokemon = {
    pokemonModal: number;
    setPokemonModal: (pokemon: number) => void;
}

const PokemonModalContext = createContext<Pokemon>({
    pokemonModal: 0,
    setPokemonModal: () => {}
});

export const PokemonModalProvider = ({ children }: { children: ReactNode }) => {

    const [pokemonModal, setPokemonModal] = useState<number>(0);

    return (
        <PokemonModalContext.Provider value={{ pokemonModal, setPokemonModal }}>
            {children}
        </PokemonModalContext.Provider>
    )

};

export const usePokemonModal = () => useContext(PokemonModalContext);