import React from 'react'
import abs from "../data/abs";
import Card from './Card';
import './Chest.css';

import Navbar from '../navbar/Navbar';

export const Abs = () => {
  return (
      <div className='container'>
        <Navbar/>
        
         <center> <h2>Abs Workout</h2>
          <div className='cards-container'>
        
         {abs.map((value, index) => (
              <Card key={index} value={value} className='card'/>
         ))}
         </div>
         </center> 
    </div>
    
    
  )
}

