import { useState } from 'react'
import { Route, Routes} from 'react-router-dom'

import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'

import Home from './pages/Home';

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app'>
      <div className='main-content'>

        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>

      </div>
    </div>
  );
}

export default App
