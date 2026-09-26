import '../style/sections/TeamCoverage.css';

import { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';

import {
    getTypeOffensiveEffectiveness
} from '../services/Types';

import {
    getMoveType
} from '../services/Attackdex';



function TeamCoverage(){

    const { team } = useOutletContext();

    const [coverage, setCoverage] = useState([]);

    const pokemonTypes = [
        'normal',
        'fire',
        'water',
        'electric',
        'grass',
        'ice',
        'fighting',
        'poison',
        'ground',
        'flying',
        'psychic',
        'bug',
        'rock',
        'ghost',
        'dragon',
        'dark',
        'steel',
        'fairy'
    ];
    

    useEffect(() => {

        const loadTeamCoverage = async () => {

            const coverageMap = {};

            pokemonTypes.forEach((type) => {
                coverageMap[type] = 0;
            });

            for (const member of team) {

                if (!member.moves) {
                    continue;
                }

                for (const move of member.moves) {

                    if (!move) {
                        continue;
                    }

                    const moveType = await getMoveType(move);

                    if (!moveType) {
                        continue;
                    }

                    const effectiveAgainst =
                        await getTypeOffensiveEffectiveness(moveType);

                    effectiveAgainst.forEach((type) => {

                        if (coverageMap[type] !== undefined) {
                            coverageMap[type]++;
                        }

                    });

                }

            }

            const coverageResults = pokemonTypes.map((type) => ({
                type,
                count: coverageMap[type]
            }));


            setCoverage(coverageResults);
        };


        loadTeamCoverage();

    }, [team]);
    

    const coveredTypes = coverage.filter(
        (item) => item.count > 0
    ).length;
    

    return (
        <div className='team-coverage'>

            <div className='team-coverage-header'>

                <div>
                    <span className='team-coverage-eyebrow'>
                        TEAM ANALYSIS
                    </span>

                    <h2>Offensive Coverage</h2>
                </div>

                <div className='team-coverage-score'>
                    <span className='coverage-score'>
                        {coveredTypes}
                    </span>

                    <span className='coverage-total'>
                        / 18
                    </span>
                </div>

            </div>


            <div className='team-coverage-grid'>

                {coverage.map((item) => (

                    <div
                        key={item.type}
                        className={`
                            team-coverage-type
                            ${item.count === 0
                                ? 'coverage-missing'
                                : 'coverage-covered'
                            }
                        `}
                    >

                        <div className='team-type-header'>

                            <span
                                className={`
                                    type
                                    type-${item.type.toLowerCase()}
                                `}
                            >
                                {item.type}
                            </span>

                            <span className='team-type-count'>
                                {item.count}
                            </span>

                        </div>

                        <span className='team-type-label'>
                            {item.count === 0
                                ? 'NO COVERAGE'
                                : 'SUPER EFFECTIVE'
                            }
                        </span>

                    </div>

                ))}

            </div>
        </div>
    );
}

export default TeamCoverage