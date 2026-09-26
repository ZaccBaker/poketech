import '../style/components/Pokecard.css'

import { useParams } from 'react-router-dom';

import EffectiveAgainst from './EffectiveAgainst';
import Weaknesses from './Weaknesses';

import{
    getPokemonId,
    getPokemonType
} from '../services/Pokedex';

import{
    getAllMoveTypes
} from '../services/Attackdex';


import {getPokemonAnimation} from '../util/PokeAnimation';

import { useState, useEffect } from 'react';


function Pokecard({data, showCoverage = false}){

    const [pokemonId, setPokemonId] = useState(null);
    const [type, setType] = useState([]);
    const [moveTypes, setMoveTypes] = useState([]);


    useEffect(() => {
            const getDetailedData = async () => {
    
                if (data.pokemon){
                    const types = await getPokemonType(data.pokemon);
                    setType(types);
                    
                    const id = await getPokemonId(data.pokemon);
                    setPokemonId(id);
                } else {
                    setType([]);
                    setPokemonId(null);
                }
    
                if (data.moves?.some((move) => move)) {
                    const types = await getAllMoveTypes(data.moves);
                    setMoveTypes(types);
                } else {
                    setMoveTypes([]);
                }
                
            };

            getDetailedData();
        }, [data]);


    return (
        <div className='pokecard'>
            <div className='pokecard-pokemon'>
                <h2>{data.pokemon ?? "Select Pokemon"}</h2>
                
                <div className='pokecard-pokemon-type'>
                    {type.map((t, index) => (
                        <span key={t}>
                            <span
                                className={`pokecard-type type type-${t.toLowerCase()}`}
                            >
                                {t}
                            </span>
                            
                            {index < type.length - 1 && (
                                <span className='type-separator'> / </span>
                            )}
                        </span>
                    ))}
                </div>
            </div>

            <hr />

            <div className='pokecard-pokemon-display'>
                {data.pokemon && pokemonId && (
                    <img 
                        className='pokecard-pokemon-img'
                        src={getPokemonAnimation(pokemonId)} 
                        alt={data.pokemon}
                    />
                )}
            </div>

            <hr />

            <div className='pokecard-moves'>
                {data.moves.map((move, index) => (
                    <div
                        className={`pokecard-move-${index}`}
                        key={index}
                    >
                        {move ?? "Select Move"}

                        {moveTypes[index] && (
                            <span
                                className={`pokecard-movetype type type-${moveTypes[index].toLowerCase()}`}
                            >
                                {moveTypes[index]}
                            </span>
                        )}
                    </div>
                ))}
            </div>
            
            {showCoverage && (
                <div className='pokecard-coverage'>
                    <EffectiveAgainst 
                        moves={data.moves}
                        moveTypes={moveTypes}
                    />
                </div>
            )}

        </div>
    );
}

export default Pokecard