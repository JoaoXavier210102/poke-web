import Fire from "../assets/Pokemon_Type_Icon_Fire.svg";
import Bug from "../assets/Pokemon_Type_Icon_Bug.svg";
import Dark from "../assets/Pokemon_Type_Icon_Dark.svg";
import Dragon from "../assets/Pokemon_Type_Icon_Dragon.svg";
import Fairy from "../assets/Pokemon_Type_Icon_Fairy.svg";
import Fighting from "../assets/Pokemon_Type_Icon_Fighting.svg";
import Flying from "../assets/Pokemon_Type_Icon_Flying.svg";
import Ghost from "../assets/Pokemon_Type_Icon_Ghost.svg";
import Grass from "../assets/Pokemon_Type_Icon_Grass.svg";
import Ground from "../assets/Pokemon_Type_Icon_Ground.svg";
import Ice from "../assets/Pokemon_Type_Icon_Ice.svg";
import Normal from "../assets/Pokemon_Type_Icon_Normal.svg";
import Poison from "../assets/Pokemon_Type_Icon_Poison.svg";
import Psychic from "../assets/Pokemon_Type_Icon_Psychic.svg";
import Rock from "../assets/Pokemon_Type_Icon_Rock.svg";
import Steel from "../assets/Pokemon_Type_Icon_Steel.svg";
import Water from "../assets/Pokemon_Type_Icon_Water.svg";
import Electric from "../assets/Pokemon_Type_Icon_Electric.svg";

type pokemon = {
    name: string,
    icon: string
}

const typesPokemon: pokemon[] = [
    {
        name: "fire",
        icon: Fire
    },
    {
        name: "bug",
        icon: Bug
    },
    {
        name: "dark",
        icon: Dark
    },
    {
        name: "dragon",
        icon: Dragon
    },
    {
        name: "fairy",
        icon: Fairy
    },
    {
        name: "fighting",
        icon: Fighting
    },
    {
        name: "flying",
        icon: Flying
    },
    {
        name: "ghost",
        icon: Ghost
    },
    {
        name: "grass",
        icon: Grass
    },
    {
        name: "ground",
        icon: Ground
    },
    {
        name: "ice",
        icon: Ice
    },
    {
        name: "normal",
        icon: Normal
    },
    {
        name: "poison",
        icon: Poison
    },
    {
        name: "psychic",
        icon: Psychic
    },
    {
        name: "rock",
        icon: Rock
    },
    {
        name: "steel",
        icon: Steel
    },
    {
        name: "water",
        icon: Water
    },
    {
        name: "electric",
        icon: Electric
    }

];

export const getIconType = (type: string): string | undefined => typesPokemon.find((item) => item.name === type)?.icon;

export default typesPokemon;