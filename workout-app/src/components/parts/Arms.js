import React from 'react'
import arms from "../data/arms";
import Card from './Card';
import './Chest.css';

import Navbar from '../navbar/Navbar';

export const Arms = () => {
  return (
      <div className='container'>
        <Navbar/>
        
         <center> <h2>Arm Workouts</h2>
          <div className='cards-container'>
        
         {arms.map((value, index) => (
              <Card key={index} value={value} className='card'/>
         ))}
         </div>
         </center> 
    </div>
    
    
  )
}

