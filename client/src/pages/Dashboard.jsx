import '../style/pages/Dashboard.css';

import { useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';

import Sidebar from '../components/Sidebar';

import { generations } from '../util/Generations';
import { capitalizeWords } from '../util/capitalize';


function Dashboard(){

    const { generation, game } = useParams();

    const gen = generations[generation];
    const gameName = capitalizeWords(game);

    const [team, setTeam] = useState([
        {
            pokemon: null,
            moves: [null, null, null, null]
        },
        {
            pokemon: null,
            moves: [null, null, null, null]
        },
        {
            pokemon: null,
            moves: [null, null, null, null]
        },
        {
            pokemon: null,
            moves: [null, null, null, null]
        },
        {
            pokemon: null,
            moves: [null, null, null, null]
        },
        {
            pokemon: null,
            moves: [null, null, null, null]
        }
    ]);


    return (
        <div className='page dashboard'>
            <div className='dashboard-title'>
                <span className='dashboard-label'>
                    Trainer Dashboard
                </span>

                <h1>{gameName}</h1>
                
                <h2>{gen.name}</h2>
            </div>

            <Sidebar />

            <div className='dashboard-content'>
                <Outlet 
                    context={{
                        team,
                        setTeam
                    }}
                />
            </div>
            
        </div>
    );
}

export default Dashboard