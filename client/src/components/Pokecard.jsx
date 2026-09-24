import '../style/components/Pokecard.css'

import { useParams } from 'react-router-dom';

import{
    getPokemonType,
    getAllMoveTypes,

} from '../services/Pokedex';

import { useState, useEffect } from 'react';


function Pokecard({data}){

    const [type, setType] = useState([]);
    const [moveTypes, setMoveTypes] = useState([]);

    // const {pokemon, moves} = data;

    // if (!pokemon) {
    //     return null;
    // }

    useEffect(() => {
            const getDetailedData = async () => {
    
                if (data.pokemon){
                    const types = await getPokemonType(data.pokemon);
                    setType(types);
                } else {
                    setType([]);
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
                
                {type.map((t, index) => (
                    <span key={t}>
                        <span
                            className='pokecard-type'
                            style={{
                                color: `var(--type-${t.toLowerCase()})`
                            }}
                        >
                            {t}
                        </span>
                        
                        {index < type.length - 1 && (
                            <span className='type-separator'> / </span>
                        )}
                    </span>
                ))}
            </div>

            <hr />

                

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
                                className='pokecard-movetype'
                                style={{
                                    color: `var(--type-${moveTypes[index].toLowerCase()})`
                                }}
                            >
                                {moveTypes[index]}
                            </span>
                        )}
                    </div>
                ))}
            </div>
            

        </div>
    );
}

export default Pokecard