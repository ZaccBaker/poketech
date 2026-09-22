import { useEffect } from 'react';
import '../style/components/Navbar.css'
import { Link, useLocation } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
// import NavDropdown from '../components/NavDropdown';
// import { useTheme } from "@mui/material/styles";
// import useMediaQuery from "@mui/material/useMediaQuery";
// import { useEffect } from 'react';



function Navbar(){

    // const theme = useTheme();
    // const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    // const location = useLocation();

    const gens = [
        "Gen 1", "Gen 2", "Gen 3", "Gen 4", "Gen 5",
        "Gen 6", "Gen 7", "Gen 8", "Gen 9"
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
                        {gens.map((gen, index) => (
                            // <li key={index}>{gen}</li>
                            <Link key={index} to={`/dash/${gen}`}>{gen}</Link>
                        ))}
                    </ul>
                </div>

                {/* {isMobile ? (
                    <NavDropdown
                        sx={{ 
                            display: { xs: "block", md: "none"} 
                        }} options={{
                            menu: [ 
                                {name: "About", id: "intro"},
                                {name: "Stack", id: "stack"},
                                {name: "Featured", id: "featured-projects"},
                                {name: "Contact", id: "contact"}
                            ] 
                        }} 
                    /> 
                ) : (
                    <nav className="nav pages">
                        <div className="title"> 
                            <a href="#intro">About</a>
                        </div>
                        <div className="title"> 
                            <a href="#stack">Stack</a>
                        </div>
                        <div className="title"> 
                            <a href="#featured-projects">Featured</a>
                        </div> 
                        <div className="title"> 
                            <a href="#contact">Contact</a>
                        </div>
                    </nav> 
                )} */}
            </header>
    );
}

export default Navbar