import '../style/components/Pokecard.css'

import { useParams } from 'react-router-dom';


function Pokecard({data}){

    // const {pokemon, moves} = data;

    // if (!pokemon) {
    //     return null;
    // }


    return (
        <div className='pokecard'>
            <div>
                <h2>{data.pokemon ?? "Select Pokemon"}</h2>
            </div>

            <hr />

            {/* <p>
                {pokemon.type}
                {pokemon.type2 && ` / ${pokemon.type2}`}
            </p> */}

            <div className='pokecard-moves'>
                {data.moves.map((move, index) => (
                    <div key={index}>
                        {move ?? "Select Move"}
                    </div>
                ))}
            </div>
            

        </div>
    );
}

export default Pokecard