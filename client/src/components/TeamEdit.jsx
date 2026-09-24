import '../style/components/TeamEdit.css';

import TeamSelector from './TeamSelector';


function TeamEdit({team, setTeam, onClose}){

    const updateTeamMember = (index, data) => {
        setTeam(prevTeam =>
            prevTeam.map((member, i) =>
                i === index
                    ? {...member, ...data}
                    : member
            )
        );
    };

    return (
        <div 
            className='team-edit' 
            onClick={(e) => {
                if (e.target === e.currentTarget) {
                    onClose();
                }
            }}
        >
            <div className='edit-main'>
                <div className='edit-header'>
                    <h2>Edit Pokémon Team</h2>
                </div>

                <div className='edit-content'>
                    {team.map((member, index) => (
                        <TeamSelector 
                            key={index}
                            number={index + 1}
                            member={member}
                            onChange={(data) => {
                                setTeam(prev =>
                                    prev.map((item, i) =>
                                        i === index
                                            ? {...item, ...data}
                                            :item
                                    )
                                );
                            }}
                        />
                    ))}

                </div>

                
            </div>
        </div>
    );
}

export default TeamEdit