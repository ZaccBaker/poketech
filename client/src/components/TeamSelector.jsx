import '../style/components/TeamSelector.css';

import SelectorDropdown from './SelectorDropdown';


function TeamSelector({info}){

    return (
        <div className='team-selector'>
            <div className='selector-header'>
                <h4>Pokémon {info.number}</h4>
            </div>

            <div className='selector-content'>
                <SelectorDropdown info={{
                    type: "Name"
                }} />
            </div>
        </div>
    );
}

export default TeamSelector