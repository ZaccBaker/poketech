import '../style/components/Sidebar.css'

import { NavLink, useParams } from 'react-router-dom';



function Sidebar(){

    const {generation, game} = useParams();

    const baseRoute = `/${generation}/${game}`;
    

    return (
        <aside className='sidebar'>

            <NavLink
                to='.'
                end
                className='sidebar-link'
                data-label='Team Dashboard'
            >
                ▦
            </NavLink>

            <NavLink
                to='pokemon-coverage'
                className='sidebar-link'
                data-label='Pokémon Coverage'
            >
                💪
            </NavLink>

            <NavLink
                to='team-coverage'
                className='sidebar-link'
                data-label='Team Coverage'
            >
                ☯️
            </NavLink>

            <NavLink
                to='battles'
                className='sidebar-link'
                data-label='Major Battles'
            >
                ⚔️
            </NavLink>

            <NavLink
                to='routes'
                className='sidebar-link'
                data-label='Routes'
            >
                🗺️
            </NavLink>

            <NavLink
                to='pokedex'
                className='sidebar-link'
                data-label='Pokédex'
            >
                📱
            </NavLink>

        </aside>
    );
}

export default Sidebar