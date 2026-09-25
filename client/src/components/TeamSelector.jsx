import '../style/components/TeamSelector.css';

import { useEffect, useState } from 'react';

import{
    getMovesByPokemon
} from '../services/Attackdex';

import SelectorDropdown from './SelectorDropdown';


function TeamSelector({number, member, pokemonOptions, onChange}){

    const [moveOptions, setMoveOptions] = useState([]);

    const handlePokemonSelect = (pokemon) => {
        onChange({
            pokemon: pokemon
        });
    };

    const handleMoveSelect = (moveIndex, move) => {
        const updatedMoves = [...member.moves];

        updatedMoves[moveIndex] = move;

        onChange({
            moves: updatedMoves
        });
    };


    useEffect(() => {
        const loadMoves = async () => {

            if (!member.pokemon) {
                setMoveOptions([]);
                return;
            }

            try {
                const moves = await getMovesByPokemon(member.pokemon);

                setMoveOptions(moves);
            } catch (error) {
                console.error(
                    `Failed to retrieve moves for ${member.pokemon}`,
                    error
                );
            }

        };

        loadMoves();
    }, [member.pokemon]);


    return (
        <div className='team-selector'>
            <div className='selector-header'>
                <h4>Pokémon {number}</h4>
            </div>

            <div className='selector-content'>
                <div className='selector-name'>
                    <SelectorDropdown 
                        options={pokemonOptions}
                        value={member.pokemon}
                        placeholder="Select Pokemon"
                        onSelect={handlePokemonSelect}
                    />
                </div>
                <div className='selector-moves'>
                    {member.moves.map((move, index) => (
                        <SelectorDropdown 
                            key={index}
                            // info={{
                            //     type: "Move",
                            //     name: member.pokemon,
                            //     number: index + 1
                            // }}
                            options={moveOptions}
                            value={move}
                            placeholder={`Move ${index + 1}`}
                            onSelect={(selectedMove) => 
                                handleMoveSelect(index, selectedMove)
                            }
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default TeamSelector