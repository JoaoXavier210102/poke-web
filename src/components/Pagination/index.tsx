import {useMediaQuery} from "react-responsive";
import "./styles.scss";

import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";

//Context
import { usePokemons } from "../../providers/pokemons";

const Pagination = () => {

    const isMobile = useMediaQuery({ query: '(max-width: 480px)' });
    const { pokemons, setPokemons } = usePokemons();

    const handleNext = () => {
        setPokemons(pokemons.map((id: number) => isMobile ? id + 10 : id + 32));
    };

    const handlePrev = () => {
        pokemons[0] !== 1 && setPokemons(pokemons.map((id: number) =>isMobile ? id - 10 : id - 32));
    };

    return (
        <div className="pagination">
            <button className="pagination-button" onClick={handlePrev} disabled={pokemons[0] === 1}><BiLeftArrowAlt size={20} /></button>
            <button className="pagination-button" onClick={handleNext}><BiRightArrowAlt size={20} /></button>
        </div>
    );

};

export default Pagination;