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

    const excludeGames = [
        "Red Japan", "Green Japan", "Blue Japan", 
        "Colosseum", "Xd", "Lets Go Pikachu", "Lets Go Eevee",
        "The Isle Of Armor Sword", "The Isle Of Armor Shield",
        "The Crown Tundra Sword", "The Crown Tundra Shield",
        "Legends Arceus", "The Teal Mask Scarlet", "The Teal Mask Violet",
        "The Indigo Disk Scarlet", "The Indigo Disk Violet",
        "Legends Za", "Mega Dimension", "Champions"
    ];


    useEffect(() => {
        const gamesByGen = async () => {
            const data = await getGamesByGeneration(gen.api);

            setGames(data);
        };

        gamesByGen();
    }, [gen]);


    return (
         <div className='page generation'>
            <h2>Select a Game</h2>

            <div className='generation-games'>
                {games.filter((game) => !excludeGames.includes(game.name))
                    .map((game) => (
                    <Link
                        className='games-option'
                        key={game.value}
                        to={`/${generation}/${game.value}/dashboard`}
                    >
                        {game.name}
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Generation