import React from 'react'
import {Link} from "react-router-dom";
const NavBarComponent = () => {
  return (
    <>
   
    <nav className='Nav_Conteiner'>
        
        <div className='Nav_Item'><Link to={"/"}>home</Link> </div>
        <div className='Nav_Item'><Link to={"/contact"}>Contact</Link></div>
        <div className='Nav_Item'>NavBarComponent</div>
    </nav>
    
    </>
  )
}

export default NavBarComponent