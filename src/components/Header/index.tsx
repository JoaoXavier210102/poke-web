import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import "./styles.scss";

import { getPokemon } from "../../services/pokeServices";
import logo from "../../assets/logoMobile.svg";
import { BiSearchAlt } from "react-icons/bi";
import Toast from "../Toast";
//Context
import { usePokemons } from "../../providers/pokemons";

const Header = () => {

    const isMobile = useMediaQuery({ query: '(max-width: 480px)' });
    const { setPokemons } = usePokemons();
    const [search, setSearch] = useState<string>("");

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        try {
            if (search) {
                const { data } = await getPokemon(search.toLowerCase())
                setPokemons([data.id])
            } else {
                handleResetpokemons()
            }

        } catch (err) {
            Toast.fire({
                icon: 'error',
                title: 'Pokemon not Found!'
            })
        }

    };

    const handleResetpokemons = () => {
        setPokemons(Array.from({ length: isMobile ? 10 : 32 }, (_, i) => i + 1))
    }

    return (
        <header>
            <img src={logo} alt="logo" onClick={handleResetpokemons} className="logo" />
            <form className="search" onSubmit={handleSubmit}>
                <input type="text" placeholder="Search" onChange={(e) => setSearch(e.target.value)} value={search} />
                <button type="submit">
                    <BiSearchAlt size={15} />
                </button>
            </form>
        </header>
    )

};

export default Header;