import '../style/components/Pokecard.css'

import { useParams } from 'react-router-dom';


function Pokecard(info){



    return (
        <div className='pokecard'>
            <div>
                <h2>{info.name}</h2>
            </div>

            <hr />

            

        </div>
    );
}

export default Pokecard