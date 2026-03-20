import React from 'react'  


import { Outlet } from 'react-router';
import FooterComponet from '../components/FooterComponet.jsx';
import HeaderComponet from "../components/HeaderComponet.jsx"

//codex why not render nav?



const MainLayout = () => {
 
  


  return (
    <>
    <HeaderComponet/>
     <Outlet/>
    <FooterComponet/>
    </>
  );
}

export default MainLayout