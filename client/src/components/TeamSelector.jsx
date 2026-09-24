import '../style/components/TeamSelector.css';

import { useState } from 'react';
import { useParams } from 'react-router-dom';

import SelectorDropdown from './SelectorDropdown';


function TeamSelector({number, member, onChange}){
    
    const {generation} = useParams();

    const generations = {
        "Gen 1": "generation-i",
        "Gen 2": "generation-ii",
        "Gen 3": "generation-iii",
        "Gen 4": "generation-iv",
        "Gen 5": "generation-v",
        "Gen 6": "generation-vi",
        "Gen 7": "generation-vii",
        "Gen 8": "generation-viii",
        "Gen 9": "generation-ix"
    };

    const apiGeneration = generations[generation];

    console.log("API Generation: ", apiGeneration);

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
                            generation: apiGeneration
                        }}
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
                            onSelect={(selectedMove) => handleMoveSelect(index, selectedMove)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default TeamSelector