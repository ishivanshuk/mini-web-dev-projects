import React from 'react'
import '../styles/App.css';
import Navbar from "./navbar/Navbar"
import HomeButtons from "./HomeButtons"

const App = () => {

  return (
    <div id="main">
      <Navbar/>
      <HomeButtons/>
      
    </div>
  )
}


export default App;
