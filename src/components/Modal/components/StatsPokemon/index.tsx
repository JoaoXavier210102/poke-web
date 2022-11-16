import React from "react";

import "./styles.scss";

type StatsPokemonProps = {
    hp: number;
    attack: number;
    defense: number;
    specialAttack: number;
    specialDefense: number;
    speed: number;
};

const StatsPokemon = ({
    hp = 0,
    attack = 0,
    defense = 0,
    specialAttack = 0,
    specialDefense = 0,
    speed = 0,
} : StatsPokemonProps) => {

    return (
        <div className="container-progress">
            <h1>Stats</h1>
            <div className="progress-bar">
                <p>HP</p>
                <progress max="100" value={hp} />
            </div>
            <div className="progress-bar">
                <p>Attack</p>
                <progress max="100" value={attack} />
            </div>
            <div className="progress-bar">
                <p>Defense</p>
                <progress max="100" value={defense} />
            </div>
            <div className="progress-bar">
                <p>Special Attack</p>
                <progress max="100" value={specialAttack} />
            </div>
            <div className="progress-bar">
                <p>Special Defense</p>
                <progress max="100" value={specialDefense} />
            </div>
            <div className="progress-bar">
                <p>Speed</p>
                <progress max="100" value={speed} />
            </div>
        </div>
    )

};

export default StatsPokemon;