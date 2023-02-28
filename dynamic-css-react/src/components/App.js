import React from 'react'
import { useRef } from 'react';
import { useState } from 'react';
import '../styles/App.css';
const App = () => {

  const ref = useRef(null);
  var size='40px';
  const [underline, setUnderline] = useState('Underline');
  const [italic, setItalic] = useState('Italic');
  const [bold, setBold] = useState('Bold');
  const [font, setFont] = useState('Serif');
  
  const display =event =>{
      document.getElementById('css-props').innerHTML=`CSS properties of above text: <br>color: ${ref.current.value}; <br>
      font-size:${size};<br>
      text-decoration: ${underline};<br>
      font-weight: ${bold};<br>
      font-style: ${italic};<br>
      font-family: ${font};`;
  }

  const setColor =event =>{
    const color=ref.current.value;
    document.documentElement.style.setProperty('--text-color',color);
  }

  const sizeChange =event =>{
      //console.log(event.currentTarget.value);
      size=`${event.currentTarget.value}px`;
      document.documentElement.style.setProperty('--text-size',`${event.currentTarget.value}px`);
  }

  const setLine=event =>{
    //const prop=event;
    if(event==='Underline')
    {
      setUnderline('Remove Underline');
    }
    else{
      setUnderline('Underline');
    }
    document.documentElement.style.setProperty('--undl',event);
  }

  const setI=event =>{
    //const prop=event;
    if(event==='Italic')
    {
      setItalic('Remove Italic');
      var prop=event;
    }
    else{
      setItalic('Italic');
      prop='normal';
    }
    document.documentElement.style.setProperty('--style',prop);
  }

  const setB=event =>{
    //const prop=event;
    if(event==='Bold')
    {
      setBold('Remove Bold');
      var prop=event;
    }
    else{
      setBold('Bold');
      prop='normal';
    }
    
    document.documentElement.style.setProperty('--weight',prop);
  }

  const changeFont=event=>{
    document.documentElement.style.setProperty('--fam',font);
  }

  const options=[
    {key:"serif" , text:"Serif"},
    {key:"sans-serif" , text:"Sans-serif"},
    {key:"monospace" , text:"Monospace"},
    {key:"cursive" , text:"Cursive"},
    {key:"fantasy" , text:"Fantasy"},
  ];

  return (
    <div id="main">
      <div className="App">
      <div className='text-here' id='text-container'>
        This is some example text
      </div>
      <div className='change-prop'>
        <p>
        <input type='text' ref={ref} placeholder='Enter Color' id='colorbox'></input>

        <button onClick={setColor} id='colorchange'>Set Color</button>

        </p>
        <p>
          <input type='range' name='text-size' min='0' max='100' default='20' onChange={sizeChange}></input>
        </p>
        <p>
          <button onClick={()=>setLine(`${underline}`)} className='stylebt'> {underline} </button>
          <button onClick={()=>setI(`${italic}`)} className='stylebt'>{italic}</button>
          <button onClick={()=>setB(`${bold}`)} className='stylebt'>{bold}</button>
        </p>
        <p>
           
        Select Font Family: <select onChange={e=>setFont(e.target.value)} id="list">

              {options.map((text, index) => (
                <option key={text.key} id="options">
                  {text.text}
                </option>
              ))}
        </select>
        <button onClick={changeFont} id='fontbt'>Change Font</button>
        </p>
        
      </div>
      <button onClick={display} id='getstyle'> Get Style Properties of Text</button>
      <p id='css-props'></p>
    </div>

    </div>
  )
}


export default App;
