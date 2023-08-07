import React from 'react';
import { Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark">
       <div className="container">   
       <Link to="/">Home</Link>
       </div>
    </nav>
  )
};

export default Navbar;