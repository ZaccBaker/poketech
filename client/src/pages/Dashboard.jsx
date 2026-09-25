import '../style/pages/Dashboard.css';

import { useParams } from 'react-router-dom';

import Team from '../sections/Team';

import { generations } from '../util/Generations';
import { capitalizeWords } from '../util/capitalize';


function Dashboard(){

    const { generation, game } = useParams();

    const gen = generations[generation];
    const gameName = capitalizeWords(game);


    return (
        <div className='page dashboard'>
            <div className='dashboard-title'>
                <span className='dashboard-label'>
                    Trainer Dashboard
                </span>

                <h1>{gameName}</h1>
                
                <h2>{gen.name}</h2>
            </div>

            <Team />
        </div>
    );
}

export default Dashboard