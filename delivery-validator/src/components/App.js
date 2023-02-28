import React from 'react'
import axios from "axios";
import {useEffect} from "react"
import { useState } from 'react';
import '../styles/App.css';
const App = () => {

const [placename, setPlacename] = useState('Bangalore');
const [lat1, setLat1]=useState();
const [lat2, setLat2]=useState();
const [lon1, setLon1]=useState();
const [lon2, setLon2]=useState();
const [i, setI]=useState(1);


  const locationApi = async () => {
    try{
      const coordinates = await axios.get(
        `https://nominatim.openstreetmap.org/search?q=${placename}&format=json&limit=1`
        );
        if(i==1)
        {
          setLat1(coordinates.data[0].lat);
          setLon1(coordinates.data[0].lon);
        }
        else{
          setLat2(coordinates.data[0].lat);
          setLon2(coordinates.data[0].lon);
        }
        //console.log(lat1, i);
        //console.log(coordinates);
        
    } 
      catch (error) {
      console.log(error);
    }
  };

  function getsource(place1)
{
   setPlacename(place1);
   setI(1);
  
}

function getdestination(place2)
{
   setPlacename(place2);
   setI(0);
   
}

function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
  var R = 6371; // Radius of the earth in km
  var dLat = deg2rad(lat2-lat1);  // deg2rad below
  var dLon = deg2rad(lon2-lon1); 
  var a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
    Math.sin(dLon/2) * Math.sin(dLon/2)
    ; 
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  var d = R * c; // Distance in km
  console.log(d);
  if(parseInt(d)<=30)
  {
    document.getElementById('result').innerHTML=`Deliverable <i class="fa fa-check" aria-hidden="true" style="color:#90ee90"></i>`
  }
  else{
    document.getElementById('result').innerHTML=`Not Deliverable <i class="fa fa-times" aria-hidden="true" style="color:red"></i>`
  }
}

function deg2rad(deg) {
  return deg * (3.14/180)
}


 useEffect( () => {
    locationApi();
}, [placename])

  return (
    <div id="main">
      <h1>Enter Locations to Check if item is deliverable</h1>
      <p>Home Address</p>
      <input type='text' onInput={e=>getsource(e.target.value)} placeholder='Enter home address' className='source' ></input>
      <p>Warehouse Address</p>
      <input type='text' onInput={e=>getdestination(e.target.value)} placeholder='Enter warehouse address' className='destination'></input>
      <p><button onClick={()=>getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2)} className='calculate'> Calculate Distance </button></p>
      <div id='result'>  </div>
      
    </div>
  )
}


export default App;
