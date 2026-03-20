import "./styles/MainLayoutStyle.scss" ////esto deberia ir fuera
import "./styles/NavBarStyle.scss" ////esto deberia ir fuera
import './App.css'
import MainLayout from './layaout/MainLayout'
import { BrowserRouter, Route, Routes } from "react-router-dom";



function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </>

  )
}

export default App
