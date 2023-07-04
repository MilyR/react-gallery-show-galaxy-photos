import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Home from './views/home.tsx'
// import Navbar from "./components/Navbar";


function App() {
  return(
    <div>
    <Routes>
     <Route path="/" element={ <Home />} />
    </Routes>
    </div>
    
  );
}

export default App;
