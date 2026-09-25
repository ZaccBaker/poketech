import '../style/components/TeamEdit.css';

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import TeamSelector from './TeamSelector';

import { 
    getGameVersionGroup
} from '../services/Games';

import {
    getPokedexRegionByVersionGroup,
    getPokemonByPokedexRegion
} from '../services/Pokedex';


function TeamEdit({team, setTeam, onClose}){

    const { game } = useParams();

    const [pokemonOptions, setPokemonOptions] = useState([]);

    useEffect(() => {
        const loadGameData = async () => {
            if (!game) {
                return;
            }

            const versionGroup = await getGameVersionGroup(game);
            const pokedexRegions = await getPokedexRegionByVersionGroup(versionGroup);

            const pokemonLists = await Promise.all(
                pokedexRegions.map((region) => 
                    getPokemonByPokedexRegion(region)
                )
            );

            const pokemon = pokemonLists.flat();

            setPokemonOptions(pokemon);
        };

        loadGameData();
    }, [game]);
    

    return (
        <div 
            className='team-edit' 
            onClick={(e) => {
                if (e.target === e.currentTarget) {
                    onClose();
                }
            }}
        >
            <div className='edit-main'>
                <div className='edit-header'>
                    <h2>Edit Pokémon Team</h2>
                </div>

                <div className='edit-content'>
                    {team.map((member, index) => (
                        <TeamSelector 
                            key={index}
                            number={index + 1}
                            member={member}
                            pokemonOptions={pokemonOptions}
                            onChange={(data) => {
                                setTeam(prev =>
                                    prev.map((item, i) =>
                                        i === index
                                            ? {...item, ...data}
                                            :item
                                    )
                                );
                            }}
                        />
                    ))}

                </div>

                
            </div>
        </div>
    );
}

export default TeamEdit