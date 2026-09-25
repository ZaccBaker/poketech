import '../style/components/Sidebar.css'

import { Link } from 'react-router-dom';



function Sidebar(){

    

    return (
        <aside className='sidebar'>
            <div 
                className='sidebar-teamDashboard'
                data-label='Team Dashboard'
            >
                
                ▦
            </div>
            
            <div 
                className='sidebar-pokemonCoverage'
                data-label='Pokémon Coverage'
            >
                
                💪
            </div>
            
            <div
                className='sidebar-teamCoverage'
                data-label='Team Coverage'
            >
                ☯️
            </div>

            <div
                className='sidebar-battles'
                data-label='Major Battles'
            >
                ⚔️
            </div>

            <div
                className='sidebar-routes'
                data-label='Routes'
            >
                🗺️
            </div>

            <div
                className='sidebar-pokedex'
                data-label='Pokédex'
            >
                📱
            </div>
        </aside>
    );
}

export default Sidebar