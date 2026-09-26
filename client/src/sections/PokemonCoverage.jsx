import '../style/sections/PokemonCoverage.css';

import { useOutletContext } from 'react-router-dom';

import Pokecard from '../components/Pokecard';


function PokemonCoverage(){

    const {
        team
    } = useOutletContext();
    

    return (
        <section className='section pokemon-coverage'>
            <div className='pokemon-coverage-content'>
                {team.map((member, index) => (
                    <Pokecard 
                        key={index}
                        data={member}
                        showCoverage
                    />
                ))} 
            </div>           
        </section>
    );
}

export default PokemonCoverage