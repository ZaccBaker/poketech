import '../style/sections/Team.css'

import { useParams } from 'react-router-dom';

import Pokecard from '../components/Pokecard';


function Team(){

    const { genId } = useParams();


    return (
        <section className='section team'>
            {Array.from({ length:6 }).map((_, index) => (
                <Pokecard key={index} />
            ))}            
        </section>
    );
}

export default Team