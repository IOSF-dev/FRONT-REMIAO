import React from 'react'
import { useState } from 'react';
import NavBarComponent from '../components/NavBarComponent.jsx';


const HeaderComponet = () => {

     const [nav, setNav] = useState(false);
      const handleToggleNavbar = () => {
        setNav(prev => !prev);
      };


  return (
    <>
    <hr />
      <header className="app-layout" onClick={handleToggleNavbar} >
        <section className="main-card" ></section>
      </header>
      <hr />
      {nav && <NavBarComponent />}
      </>
  )
}

export default HeaderComponet