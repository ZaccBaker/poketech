import './App.css';

import { useState } from 'react';
import { Route, Routes} from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Generation from './pages/Generation';

import Dashboard from './pages/Dashboard';
import Team from './sections/Team';
import PokemonCoverage from './sections/PokemonCoverage';
import TeamCoverage from './sections/TeamCoverage';
import Battles from './sections/Battles';
import PokeRoutes from './sections/PokeRoutes';
import Pokedex from './sections/Pokedex';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app'>
      <div className='main-content'>

        <Navbar />

        <Routes>
          <Route path='/' element={<Home />} />

          <Route path='/:generation' element={<Generation />} />

          {/* <Route path='/:generation/:game/dashboard' element={<Dashboard />} /> */}
          
          <Route
            path='/:generation/:game/dashboard'
            element={<Dashboard />}
          >
            <Route 
              index
              element={<Team />} 
            />

            <Route
                path='pokemon-coverage'
                element={<PokemonCoverage />}
            />

            <Route
                path='team-coverage'
                element={<TeamCoverage />}
            />

            <Route
                path='battles'
                element={<Battles />}
            />

            <Route
                path='routes'
                element={<PokeRoutes />}
            />

            <Route
                path='pokedex'
                element={<Pokedex />}
            />
          </Route>

        </Routes>

      </div>
    </div>
  );
}

export default App
