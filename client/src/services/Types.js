import{
    capitalizeWords
} from '../util/capitalize';

const POKEAPI = import.meta.env.VITE_POKEAPI_BASE_URL;

const POKEMON_TYPES = [
    "normal",
    "fire",
    "water",
    "electric",
    "grass",
    "ice",
    "fighting",
    "poison",
    "ground",
    "flying",
    "psychic",
    "bug",
    "rock",
    "ghost",
    "dragon",
    "dark",
    "steel",
    "fairy"
];


async function getTypeRelations(type) {

    const response = await fetch(
        `${POKEAPI}/type/${type.toLowerCase()}`
    );

    if (!response.ok) {
        throw new Error(
            `Failed to retrieve type ${type}`
        );
    }

    return response.json();
}


export async function getTypeOffensiveEffectiveness(type) {

    const response = await fetch(
        `${POKEAPI}/type/${type.toLowerCase()}`
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


export async function getDefensiveEffectiveness(pokemonTypes) {

    const multipliers = {};

    POKEMON_TYPES.forEach((type) => {
        multipliers[type] = 1;
    });


    const typeData = await Promise.all(
        pokemonTypes.map((type) =>
            getTypeRelations(type)
        )
    );


    typeData.forEach((data) => {

        data.damage_relations.double_damage_from.forEach(
            ({ name }) => {
                multipliers[name] *= 2;
            }
        );

        data.damage_relations.half_damage_from.forEach(
            ({ name }) => {
                multipliers[name] *= 0.5;
            }
        );

        data.damage_relations.no_damage_from.forEach(
            ({ name }) => {
                multipliers[name] *= 0;
            }
        );

    });


    const results = {
        x4: [],
        x2: [],
        x05: [],
        x025: [],
        immune: []
    };


    Object.entries(multipliers).forEach(
        ([type, multiplier]) => {

            switch (multiplier) {

                case 4:
                    results.x4.push(type);
                    break;

                case 2:
                    results.x2.push(type);
                    break;

                case 0.5:
                    results.x05.push(type);
                    break;

                case 0.25:
                    results.x025.push(type);
                    break;

                case 0:
                    results.immune.push(type);
                    break;
            }

        }
    );


    return results;
}

// 

