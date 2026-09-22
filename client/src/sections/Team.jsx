import '../style/sections/Team.css';

import { useParams } from 'react-router-dom';
import { useState } from 'react';

import TeamEdit from '../components/TeamEdit';
import Pokecard from '../components/Pokecard';


function Team(){

    const [showEdit, setShowEdit] = useState(false);

    const { genId } = useParams();

    const onShowEditClick = () => {
        setShowEdit(true);
    };


    return (
        <>
            <section className='section team'>
                <button onClick={onShowEditClick}>Edit Team</button>
                <div className='team-content'>
                    {Array.from({ length:6 }).map((_, index) => (
                        <Pokecard key={index} />
                    ))} 
                </div>           
            </section>

            {showEdit && (
                <TeamEdit 
                    onClose = {() => setShowEdit(false)}
                />
            )}
        </>
    );
}

export default Team