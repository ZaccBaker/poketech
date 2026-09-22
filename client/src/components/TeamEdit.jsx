import '../style/components/TeamEdit.css';

import TeamSelector from './TeamSelector';


function TeamEdit({onClose}){

    return (
        <div className='team-edit' onClick={onClose}>
            <div className='edit-main' onClick={(e) => e.stopPropagation()}>
                <div className='edit-header'>
                    <h2>Edit Pokémon Team</h2>
                </div>

                <div className='edit-content'>
                    {Array.from({length:6}).map((_, index) => (
                        <TeamSelector info={{
                            number: index+1
                        }}/>
                    ))}

                </div>
            </div>
        </div>
    );
}

export default TeamEdit