import{
    capitalizeWords
} from '../util/capitalize';

const POKEAPI = import.meta.env.VITE_POKEAPI_BASE_URL;


export const getPokemonByGeneration = async(generation) => {
    
    const response = await fetch(`${POKEAPI}/generation/${generation}`);

    if (!response.ok){
        throw new Error("Failed to retrieve Pokemon by Generation");
    }

    const data = await response.json();

    return data.pokemon_species.map((pokemon) => capitalizeWords(pokemon.name));
};


export const getPokemonByPokedexRegion = async(region) => {
    
    const response = await fetch(`${POKEAPI}/pokedex/${region}`);

    if (!response.ok){
        throw new Error("Failed to retrieve Pokemon by Pokedex Region");
    }

    const data = await response.json();

    return data.pokemon_entries.map((pokemon) => capitalizeWords(pokemon.pokemon_species.name.replaceAll("-", " ")));
};


export const getPokemonId = async(pokemon) => {
    
    const response = await fetch(`${POKEAPI}/pokemon/${pokemon}`);

    if (!response.ok){
        throw new Error("Failed to retrieve Pokemon ID");
    }

    const data = await response.json();

    return data.id;
};


export const getPokemonType = async(pokemon) => {

    const response = await fetch(`${POKEAPI}/pokemon/${pokemon}`);

    if (!response.ok) {
        throw new Error("Failed to retrieve Pokemon type");
    }

    const data = await response.json();

    return data.types.map((type) => capitalizeWords(type.type.name.replaceAll("-", " ")));
}


export const getPokedexRegionByVersionGroup = async(version) => {

    const response = await fetch(`${POKEAPI}/version-group/${version}`);

    if (!response.ok) {
        throw new Error("Failed to retrieve Pokedex Region");
    }

    const data = await response.json();

    return data.pokedexes.map((r) => r.name);
}