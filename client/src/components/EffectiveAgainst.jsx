import '../style/components/EffectiveAgainst.css'

import { useEffect, useState } from 'react';

import {
    getTypeOffensiveEffectiveness
} from '../services/Types';


function EffectiveAgainst({ moves = [], moveTypes = [] }) {

    const [effectiveness, setEffectiveness] = useState([]);

    useEffect(() => {

        const loadEffectiveness = async () => {

            const results = await Promise.all(
                moves.map(async (move, index) => {

                    const moveType = moveTypes[index];

                    if (!move || !moveType) {
                        return null;
                    }

                    const effectiveAgainst =
                        await getTypeOffensiveEffectiveness(moveType);

                    return {
                        move,
                        type: moveType,
                        effectiveAgainst
                    };
                })
            );

            setEffectiveness(
                results.filter(Boolean)
            );
        };

        loadEffectiveness();

    }, [moves, moveTypes]);


    return (
        <div className='effective-against'>

            <div className='coverage-header'>
                <h3>Effective Against</h3>
            </div>

            <div className='effective-list'>

                {effectiveness.map((item) => (

                    <div
                        className='effective-move'
                        key={item.move}
                    >
                        <div className='effective-move-header'>

                            <span className='effective-move-name'>
                                {item.move}
                            </span>

                            <span
                                className={`
                                    type
                                    type-${item.type.toLowerCase()}
                                `}
                            >
                                {item.type}
                            </span>

                        </div>

                        <div className='effective-types'>

                            {item.effectiveAgainst.map((type) => (
                                <span
                                    className={`
                                        type
                                        type-${type.toLowerCase()}
                                    `}
                                    key={type}
                                >
                                    {type}
                                </span>
                            ))}

                        </div>
                    </div>

                ))}

            </div>

        </div>
    );
}

export default EffectiveAgainst