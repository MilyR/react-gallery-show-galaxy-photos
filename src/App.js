import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './views/home.tsx';
import Apod from './views/apod.tsx';
import Asteroid from './views/asteroid.tsx';
import Donki from './views/donki.tsx';
import Navbar from "./components/Navbar";


function App() {
  return(
    <div>
    <Navbar/>
    <Routes>
     <Route path="/" element={ <Home />} />
     <Route path="/apod" element={ <Apod />} />
     <Route path="/asteroid" element={ <Asteroid />} />
     <Route path="/donki" element={<Donki />} />
    </Routes>
    </div>
    
  );
}

export default App;
