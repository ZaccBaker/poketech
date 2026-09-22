import{
    capitalizeFirstLetter
} from '../util/capitalize';

const POKEAPI = import.meta.env.VITE_POKEAPI_BASE_URL;


export const getPokemonByGeneration = async(generation) => {
    
    const response = await fetch(`${POKEAPI}/generation/${generation}`);

    if (!response.ok){
        throw new Error("Failed to retrieve Pokemon");
    }

    const data = await response.json();

    return data.pokemon_species.map((pokemon) => capitalizeFirstLetter(pokemon.name));
};

