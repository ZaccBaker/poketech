import '../style/components/Pokecard.css'

import { useParams } from 'react-router-dom';


function Pokecard(){

    const { index } = useParams();


    return (
        <div className='pokecard'>
            <div>
                <h2>{}</h2>
            </div>

        </div>
    );
}

export default Pokecard