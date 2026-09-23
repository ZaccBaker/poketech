import{
    capitalizeWords
} from '../util/capitalize';

const POKEAPI = import.meta.env.VITE_POKEAPI_BASE_URL;


export const getPokemonByGeneration = async(generation) => {
    
    const response = await fetch(`${POKEAPI}/generation/${generation}`);

    if (!response.ok){
        throw new Error("Failed to retrieve Pokemon");
    }

    const data = await response.json();

    return data.pokemon_species.map((pokemon) => capitalizeWords(pokemon.name));
};


export const getMovesByPokemon = async(pokemon) => {

    const response = await fetch(`${POKEAPI}/pokemon/${pokemon}`);

    if (!response.ok) {
        throw new Error("Failed to retrieve moves");
    }

    const data = await response.json();

    return data.moves.map((move) => capitalizeWords(move.move.name.replaceAll("-", " ")));
}