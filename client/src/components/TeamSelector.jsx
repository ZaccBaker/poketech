import '../style/components/TeamSelector.css';

import { useState } from 'react';
import { useParams } from 'react-router-dom';

import SelectorDropdown from './SelectorDropdown';


function TeamSelector({info}){
    
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

    console.log(apiGeneration);
    
    const [pokemon, setPokemon] = useState("");




    return (
        <div className='team-selector'>
            <div className='selector-header'>
                <h4>Pokémon {info.number}</h4>
            </div>

            <div className='selector-content'>
                <div className='selector-name'>
                    <SelectorDropdown info={{
                            type: "Name",
                            generation: apiGeneration
                        }}
                        onSelect={setPokemon}
                    />
                </div>
                <div className='selector-moves'>
                    {Array.from({length:4}).map((_, index) => (
                        <SelectorDropdown info={{
                            type: "Move",
                            generation: apiGeneration,
                            name: pokemon
                        }}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default TeamSelector