import React from 'react'

import NavBarComponent from '../components/NavBarComponent.jsx';




const MainLayout = () => {
//const [showSecondary, setShowSecondary] = useState(false);
//const [bounce, setBounce] = useState(false); ----------------------${bounce ? "bounce" : ""}
  //const [activeSection, setActiveSection] = useState(null);

 




/////main y app....eh cambia eso no?

  return (
    <>
<hr />
    <div className="app-layout">
      <div className={`main-card `}/>
    </div>
    <hr />
    <br />
    <br />
    
    <NavBarComponent/>
    </>
  );
}

export default MainLayout