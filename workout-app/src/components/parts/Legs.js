import React from 'react'
import legs from "../data/legs";
import Card from './Card';
import './Chest.css';

import Navbar from '../navbar/Navbar';

export const Legs = () => {
  return (
      <div className='container'>
        <Navbar/>
        
         <center> <h2>Legs Workout</h2>
          <div className='cards-container'>
        
         {legs.map((value, index) => (
              <Card key={index} value={value} className='card'/>
         ))}
         </div>
         </center> 
    </div>
    
    
  )
}

