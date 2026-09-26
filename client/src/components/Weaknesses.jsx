import '../style/components/Weaknesses.css'

import { useEffect, useState } from 'react';

import {
    getDefensiveEffectiveness
} from '../services/Types';


function Weaknesses({ pokemonTypes = [] }) {

    const [weaknesses, setWeaknesses] = useState(null);

    useEffect(() => {

        const loadWeaknesses = async () => {

            if (!pokemonTypes.length) {
                setWeaknesses(null);
                return;
            }

            const result =
                await getDefensiveEffectiveness(pokemonTypes);

            setWeaknesses(result);
        };

        loadWeaknesses();

    }, [pokemonTypes]);


    if (!weaknesses) {
        return null;
    }


    return (
        <div className='weaknesses'>

            <div className='coverage-header'>
                <h3>Weaknesses</h3>
            </div>

            <WeaknessGroup
                label='4×'
                types={weaknesses.x4}
            />

            <WeaknessGroup
                label='2×'
                types={weaknesses.x2}
            />

            <WeaknessGroup
                label='½×'
                types={weaknesses.x05}
            />

            <WeaknessGroup
                label='¼×'
                types={weaknesses.x025}
            />

            <WeaknessGroup
                label='Immune'
                types={weaknesses.immune}
            />

        </div>
    );
}


function WeaknessGroup({ label, types }) {

    if (!types?.length) {
        return null;
    }

    return (
        <div className='weakness-group'>

            <span className='weakness-multiplier'>
                {label}
            </span>

            <div className='weakness-types'>

                {types.map((type) => (
                    <span
                        key={type}
                        className={`
                            type
                            type-${type.toLowerCase()}
                        `}
                    >
                        {type}
                    </span>
                ))}

            </div>

        </div>
    );
}


export default Weaknesses