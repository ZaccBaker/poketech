import '../style/pages/Generation.css';

import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';


function Generation(){

    const {generation} = useParams();
    
    const generationName = generation.replace("gen", "Gen ");

    return (
         <div className='page generation'>
            <h2>Select a Game</h2>

            <Link to={`/${generation}/firered/dashboard`}>
                FireRed
            </Link>

            <Link to={`/${generation}/leafgreen/dashboard`}>
                LeafGreen
            </Link>

            <Link to={`/${generation}/emerald/dashboard`}>
                Emerald
            </Link>
        </div>
    );
}

export default Generation