import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

import { getPokemon, getStatusPokemon } from "../../services/pokeServices";
import { getIconType } from "../../utils/typesPokemon";

import "./styles.scss";

import StatsPokemon from "./components/StatsPokemon";
import { IoIosCloseCircle } from "react-icons/io";
import { BsFillArrowDownCircleFill } from "react-icons/bs";

//Context
import { usePokemonModal } from "../../providers/pokemonModal";
import { useOpenModal } from "../../providers/openModal";

const Modal = () => {

    const isMobile = useMediaQuery({ query: "(max-width: 480px)" });
    const { pokemonModal, setPokemonModal } = usePokemonModal();
    const { setOpen, open } = useOpenModal();

    const [loading, setLoading] = useState(false);

    const [fields, setFields] = useState({
        name: "",
        image: "",
        about: "",
        types: [],
        stats: {
            hp: 0,
            attack: 0,
            defense: 0,
            specialAttack: 0,
            specialDefense: 0,
            speed: 0,
        },
    });

    useEffect(() => {
        const request = async () => {
            setLoading(true);
            const response = (await getPokemon(pokemonModal)).data;
            const responseStatus = (await getStatusPokemon(pokemonModal)).data;

            setFields({
                name: response.name.toUpperCase(),
                types: response.types.map((type: any) => getIconType(type.type.name)),
                about: responseStatus.flavor_text_entries.find((item: any) => item.language.name === "en" && item.version.name === "red").flavor_text.replace("\f", " "),
                image: response.sprites.front_default,
                stats: {
                    hp: response.stats[0].base_stat,
                    attack: response.stats[1].base_stat,
                    defense: response.stats[2].base_stat,
                    specialAttack: response.stats[3].base_stat,
                    specialDefense: response.stats[4].base_stat,
                    speed: response.stats[5].base_stat,
                },
            });
            setLoading(false);
        };

        request();
    }, [pokemonModal]);

    const handleCloseModal = () => setOpen(false);

    const handleNextPokemon = () => setPokemonModal(pokemonModal + 1);

    return (
        <div className={`modal ${open ? "show" : ""}`}>
            <button onClick={handleCloseModal} className="close-button">
                <IoIosCloseCircle size={30} />
            </button>
            {!loading && (
                <>
                    <div className="about-pokemon">
                        <h2>
                            {fields.about}
                        </h2>
                    </div>

                    <div className="sprite-pokemon">
                        <img src={fields.image} alt={fields.name} />
                    </div>

                    <div className="name-pokemon">
                        <h3>{fields.name}</h3>
                    </div>

                    <div className={`${!isMobile && "container-types-stats-pokemon"}`} >
                        <div className="types-pokemon">
                            <h3>Types</h3>
                            <div>
                                {fields.types.map((type: string) => (
                                    <img src={type} alt="type" />
                                ))}
                            </div>
                        </div>

                        <div className="stats-pokemon">
                            <StatsPokemon
                                hp={fields.stats.hp}
                                attack={fields.stats.attack}
                                defense={fields.stats.defense}
                                specialAttack={fields.stats.specialAttack}
                                specialDefense={fields.stats.specialDefense}
                                speed={fields.stats.speed}
                            />
                        </div>
                    </div>

                    <div className="next-pokemon">
                        <button onClick={handleNextPokemon} >
                            {isMobile && <BsFillArrowDownCircleFill size={20} />}
                            <h3>Next Pokemon</h3>
                        </button>
                    </div>
                </>
            )}
        </div>
    );

};

export default Modal;