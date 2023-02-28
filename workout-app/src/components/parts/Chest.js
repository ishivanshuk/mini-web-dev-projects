import React from 'react'
import chest from "../data/data";
import Card from './Card';
import './Chest.css';

import Navbar from '../navbar/Navbar';
export const Chest = () => {
  return (
      <div className='container'>
        <Navbar/>
        
         <center> <h2>Chest Workouts</h2>
          <div className='cards-container'>
        
         {chest.map((value, index) => (
              <Card key={index} value={value} className='card'/>
         ))}
         </div>
         </center> 
    </div>
    
    
  )
}

