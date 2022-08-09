import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
      <nav>
        <ul className='nav-links'><h3>Shashidhar Bollu</h3>
           <Link to="/"> <li>Home</li> </Link>
           <Link to="/About"> <li>About</li> </Link>
           <Link to="/Project"> <li>Project</li> </Link>
        </ul>
        </nav>
   
  )
}
 export default Navbar
