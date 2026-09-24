import '../style/sections/Team.css';

import { useParams } from 'react-router-dom';
import { useState } from 'react';

import TeamEdit from '../components/TeamEdit';
import Pokecard from '../components/Pokecard';
import { getPokemonByGeneration } from '../services/Pokedex';


function Team(){

    const [showEdit, setShowEdit] = useState(false);

    const [team, setTeam] = useState(
        Array.from({length:6}, (_, index) => ({
            slot: index + 1,
            pokemon: null,
            moves: [null, null, null, null]
        }))
    );

    const onShowEditClick = () => {
        setShowEdit(true);
    };

    console.log("Team: ", team);

    return (
        <>
            <section className='section team'>

                <button  
                    onClick={onShowEditClick}
                >
                    Edit Team
                </button>

                <div className='team-content'>
                    {team.map((member, index) => (
                        <Pokecard 
                            key={index}
                            data={member}
                        />
                    ))} 
                </div>           
            </section>

            {showEdit && (
                <TeamEdit
                    team={team}
                    setTeam={setTeam}
                    onClose = {() => setShowEdit(false)}
                />
            )}
        </>
    );
}

export default Team