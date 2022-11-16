import { useEffect, useState } from "react";

import "./styles.scss";
import typesPokemon from "../../utils/typesPokemon";

import { getPokemon, getStatusPokemon } from "../../services/pokeServices";

//Context
import { usePokemonModal } from "../../providers/pokemonModal";
import { useOpenModal } from "../../providers/openModal";

type Fields = {
    name: string;
    mainType: string;
    allTypes: string[];
    image: string;
    about: string;
}

const Card = ({ id }: { id: number }) => {

    const { setOpen } = useOpenModal();
    const { setPokemonModal } = usePokemonModal();

    const [loading, setLoading] = useState<boolean>(true);

    const [fields, setFields] = useState<Fields>({
        name: "",
        mainType: "",
        allTypes: [],
        image: "",
        about: ""
    });

    useEffect(() => {

        const requestPokemons = async () => {

            setLoading(true);

            const poke = await getPokemon(id);
            const status = await getStatusPokemon(id);

            setFields({
                name: poke.data.name,
                mainType: poke.data.types[0].type.name,
                allTypes: poke.data.types.map((type: any) => typesPokemon.find((item: any) => item.name === type.type.name)?.icon),
                image: poke.data.sprites.front_default,
                about: status.data.flavor_text_entries.find((item: any) => item.language.name === "en" && item.version.name === "red").flavor_text.replace("\f", " ")
            });

            setLoading(false);

        };

        requestPokemons();

    }, [id]);

    const getIcon = (type: string): string | undefined => typesPokemon.find((item) => item.name === type)?.icon;

    const handleCard = () => {

        setPokemonModal(id);
        setOpen(true)
    }

    return (
        <div className="card" onClick={handleCard}>
            {loading ? (
                <div className="loading-card" />
            ) : (
                <div className="content">
                    <div className="front">
                        <div className="card-front-pokemon">
                            <img src={fields.image} alt="pokemon" className="pokemon" />
                            <img src={getIcon(fields.mainType)} alt="pokemonType" className="pokemonType" />
                            <div className="name">
                                <h3>{fields.name}</h3>
                            </div>
                        </div>
                    </div>
                    <div className="back">
                        <div className="card-back-pokemon">
                            <h3>About</h3>
                            <h4>{fields.about}</h4>
                            <div className="pokemon-types">
                                {fields.allTypes.map((type) => (
                                    <img key={type} src={type} alt="pokemonType" />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );

};

export default Card;