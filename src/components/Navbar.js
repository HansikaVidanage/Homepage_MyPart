import React, {useState} from 'react'

import {Link} from 'react-router-dom'
import ReorderIcon from "@material-ui/icons/Reorder";
import '../Styles/Navbar.css'

function Navbar() {
 const[openLinks, setOpenLinks]=useState(false)

 const toggleNavbar = () => {
  setOpenLinks(!openLinks);
 }
  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>  
          <h1>DooDus</h1>
          <div className="hiddenLinks">
          <Link to ="/">Home</Link>
          <Link to ="/signup">Sign Up</Link>
          <Link to ="/login">LogIn</Link>
          </div>
      </div>
      <div className="rightSide">
          <Link to ="/">Home</Link>
          <Link to ="/signup">Sign Up</Link>
          <Link to ="/login">LogIn</Link>
          <button onClick={toggleNavbar}>
          <ReorderIcon/>
          </button>
      </div>
    </div>
  )
}

export default Navbar
