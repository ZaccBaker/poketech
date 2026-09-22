import '../style/pages/Dashboard.css';

import { useParams } from 'react-router-dom';

import Team from '../sections/Team';


function Dashboard(){

    const { genId } = useParams();


    return (
        <div className='page dashboard'>
            <h1>{genId}</h1>

            <Team />

        </div>
    );
}

export default Dashboard