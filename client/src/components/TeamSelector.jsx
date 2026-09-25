import '../style/components/TeamSelector.css';

import { useState } from 'react';
import { useParams } from 'react-router-dom';

import SelectorDropdown from './SelectorDropdown';

import { generations } from '../util/Generations';


function TeamSelector({number, member, onChange}){
    
    const {generation} = useParams();

    const gen = generations[generation];

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




    return (
        <div className='team-selector'>
            <div className='selector-header'>
                <h4>Pokémon {number}</h4>
            </div>

            <div className='selector-content'>
                <div className='selector-name'>
                    <SelectorDropdown 
                        info={{
                            type: "Name",
                            generation: gen.api
                        }}
                        value={member.pokemon}
                        onSelect={handlePokemonSelect}
                    />
                </div>
                <div className='selector-moves'>
                    {member.moves.map((move, index) => (
                        <SelectorDropdown 
                            key={index}
                            info={{
                                type: "Move",
                                name: member.pokemon,
                                number: index + 1
                            }}
                            value={move}
                            onSelect={(selectedMove) => handleMoveSelect(index, selectedMove)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default TeamSelector