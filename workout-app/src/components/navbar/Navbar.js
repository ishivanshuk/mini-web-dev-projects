import React from 'react'
import "./Navbar.css"
import Drawer from "./Drawer"
import { useNavigate } from 'react-router-dom';
 
const Navbar = ({setCategory}) => {
  let navigate=useNavigate();
  return (
    <div className="nav">
        <div className="icon">
            <Drawer setCategory={setCategory} />
        </div>
        
            <img
            style={{ cursor: "pointer" }}
            src="https://progymworkout.com/img/icons/fitcraft.png" 
            alt="logo"
            height="90%"
            onClick={ () => {navigate('/')} }
            />
        

    </div>
  )
}
export default Navbar