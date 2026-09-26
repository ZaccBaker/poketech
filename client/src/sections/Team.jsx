import '../style/sections/Team.css';

import { useOutletContext } from 'react-router-dom';
import { useState } from 'react';

import TeamEdit from '../components/TeamEdit';
import Pokecard from '../components/Pokecard';


function Team(){

    const [showEdit, setShowEdit] = useState(false);

    const {
        team,
        setTeam
    } = useOutletContext();

    const onShowEditClick = () => {
        setShowEdit(true);
    };
    

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