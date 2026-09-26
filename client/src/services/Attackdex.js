import{
    capitalizeWords
} from '../util/capitalize';

const POKEAPI = import.meta.env.VITE_POKEAPI_BASE_URL;


export const getMovesByPokemon = async(pokemon) => {

    const response = await fetch(`${POKEAPI}/pokemon/${pokemon}`);

    if (!response.ok) {
        throw new Error("Failed to retrieve moves");
    }

    const data = await response.json();

    return data.moves.map((move) => capitalizeWords(move.move.name.replaceAll("-", " ")));
}


export const getMoveType = async(move) => {

    if (!move) {
        return null;
    }

    const formattedMove = move
        .toLowerCase()
        .trim()
        .replaceAll(' ', '-');

    const response = await fetch(`${POKEAPI}/move/${formattedMove}`);

    if (!response.ok) {
        console.log(`Failed to fetch move: ${formattedMove}`);
        return null;
    }

    const data = await response.json();

    return data.type.name;
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