import '../style/components/Navbar.css'

import { Link } from 'react-router-dom';


function Navbar(){

    const gens = [
        { name: "Gen 1", value: "gen1" },
        { name: "Gen 2", value: "gen2" },
        { name: "Gen 3", value: "gen3" },
        { name: "Gen 4", value: "gen4" },
        { name: "Gen 5", value: "gen5" },
        { name: "Gen 6", value: "gen6" },
        { name: "Gen 7", value: "gen7" },
        { name: "Gen 8", value: "gen8" },
        { name: "Gen 9", value: "gen9" }
    ];

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
                        {gens.map((gen) => (
                            <Link 
                                key={gen.value} 
                                to={`/${gen.value}`}
                                generation={gen.name}
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