import '../style/components/Navbar.css'

import { Link } from 'react-router-dom';

import { generations } from '../util/Generations';


function Navbar(){

    const homeClick = (e) => {
        if (location.pathname === "/"){
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    return (
            <header className="site-header">
                <div className="nav home">
                    <img src="/greatball.png" alt="Greatball" />
                    <Link to="/" onClick={homeClick} className='home-name'>
                        PokéTech
                    </Link>
                    <img src="/masterball.png" alt="Masterball" />
                </div>

                <div className='nav gens'>
                    <ul>
                        {Object.values(generations).map((gen) => (
                            <Link 
                                key={gen.id} 
                                to={`/${gen.param}`}
                            >
                                {gen.name}
                            </Link>
                        ))}
                    </ul>
                </div>
            </header>
    );
}

export default Navbar