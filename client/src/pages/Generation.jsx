import '../style/pages/Generation.css';

import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import { generations } from '../util/Generations';

import {
    getGamesByGeneration,

} from '../services/Games';



function Generation(){

    const {generation} = useParams();
    
    const gen = generations[generation];

    const [games, setGames] = useState([]);


    useEffect(() => {
        const gamesByGen = async () => {
            const data = await getGamesByGeneration(gen.api);

            setGames(data);
        };

        gamesByGen();
    }, [gen]);
    
    console.log("Games: ", games);


    return (
         <div className='page generation'>
            <h2>Select a Game</h2>

            <div className='generation-games'>
                <Link to={`/${gen.param}/firered/dashboard`}>
                    FireRed
                </Link>

                <Link to={`/${gen.param}/leafgreen/dashboard`}>
                    LeafGreen
                </Link>

                <Link to={`/${gen.param}/emerald/dashboard`}>
                    Emerald
                </Link>
            </div>
        </div>
    );
}

export default Generation