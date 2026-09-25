import '../style/pages/Dashboard.css';

import { useParams } from 'react-router-dom';

import Team from '../sections/Team';

import { generations } from '../util/Generations';


function Dashboard(){

    const { generation } = useParams();

    const gen = generations[generation];


    return (
        <div className='page dashboard'>
            <h1>{gen.name}</h1>

            <Team />

        </div>
    );
}

export default Dashboard