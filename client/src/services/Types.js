import{
    capitalizeWords
} from '../util/capitalize';

const POKEAPI = import.meta.env.VITE_POKEAPI_BASE_URL;


export async function getTypeOffensiveEffectiveness(type) {

    const response = await fetch(
        `${BASE_URL}/type/${type.toLowerCase()}`
    );

    if (!response.ok) {
        throw new Error(
            `Failed to retrieve effectiveness for ${type}`
        );
    }

    const data = await response.json();

    return data.damage_relations.double_damage_to.map(
        (type) => type.name
    );
}