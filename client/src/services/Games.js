import{
    capitalizeWords
} from '../util/capitalize';

const POKEAPI = import.meta.env.VITE_POKEAPI_BASE_URL;


export const getGamesByGeneration = async(generation) => {
    
    const response = await fetch(`${POKEAPI}/generation/${generation}`);

    if (!response.ok){
        throw new Error("Failed to retrieve Game by Generation");
    }

    const data = await response.json();

    return data.version_groups.map((game) => capitalizeWords(game.name.split("-")));
};