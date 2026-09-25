import { useState } from 'react'
import { Route, Routes} from 'react-router-dom'

import Navbar from './components/Navbar'
import Home from './pages/Home';
import Generation from './pages/Generation'
import Dashboard from './pages/Dashboard'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app'>
      <div className='main-content'>

        <Navbar />

        <Routes>
          <Route path='/' element={<Home />} />

          <Route path='/:generation' element={<Generation />} />
          <Route path='/:generation/:game/dashboard' element={<Dashboard />} />
        </Routes>

      </div>
    </div>
  );
}

export default App
