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

    const games = await Promise.all(
        data.version_groups.map(async (group) => {

            const response = await fetch(group.url);

            if (!response.ok) {
                throw new Error("Failed to retrieve version group");
            }

            const groupData = await response.json();

            return groupData.versions;
        })
    );

    return games.flatMap((group) =>
        group.map((game) => ({
            name: formatGameName(game.name),
            value: game.name
        }))
    );
};


export const getGameVersionGroup = async(game) => {

    const response = await fetch(`${POKEAPI}/version/${game}`);

    if (!response.ok) {
        throw new Error("Failed to retrieve Game Version Group");
    }

    const data = await response.json();

    return data.version_group.name;
}



// ========================================

const formatGameName = (name) => {
    return name
        .split("-")
        .map(word => capitalizeWords(word))
        .join(" ");
};