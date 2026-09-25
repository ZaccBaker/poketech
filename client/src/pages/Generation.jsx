import '../style/pages/Generation.css';

import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { generations } from '../util/Generations';


function Generation(){

    const {generation} = useParams();
    
    const gen = generations[generation];

    return (
         <div className='page generation'>
            <h2>Select a Game</h2>

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
    );
}

export default Generation