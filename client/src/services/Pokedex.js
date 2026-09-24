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


export const getPokemonType = async(pokemon) => {

    const response = await fetch(`${POKEAPI}/pokemon/${pokemon}`);

    if (!response.ok) {
        throw new Error("Failed to retrieve Pokemon type");
    }

    const data = await response.json();

    return data.types.map((type) => capitalizeWords(type.type.name.replaceAll("-", " ")));
}


export const getMoveType = async(move) => {

    const response = await fetch(`${POKEAPI}/move/${move}`);

    if (!response.ok) {
        throw new Error("Failed to retrieve Move type");
    }

    const data = await response.json();

    return data.type.map((type) => capitalizeWords(type.type.name.replaceAll("-", " ")));
}


export const getAllMoveTypes = async(moves) => {
    const requests = moves.map(async (move) => {
        if (!move) {
            return Promise.resolve(null);
        }

        const formattedMove = move
            .toLowerCase()
            .replaceAll(" ", "-");

        const response = await fetch(`${POKEAPI}/move/${formattedMove}`);

        if (!response.ok) {
            console.log(`Failed to fetch move: ${formattedMove}`);
            return null;
        }

        const data = await response.json();

        return capitalizeWords(data.type.name.replaceAll("-", " "));
    });
    
    return Promise.all(requests);
}