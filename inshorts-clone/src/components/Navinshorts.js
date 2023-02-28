import React from 'react'
import "./Navinshorts.css"
import Drawer from './Drawer'

const Navinshorts = ({setCategory}) => {
  return (
    <div className="nav">
        <div className="icon">
            <Drawer setCategory={setCategory} />
        </div>
        
            <img
            style={{ cursor: "pointer" }}
            src="https://assets.inshorts.com/website_assets/images/logo_inshorts.png" 
            alt="logo"
            height="90%"
            />
        

    </div>
  )
}

export default Navinshorts