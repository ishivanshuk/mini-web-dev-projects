
import '../styles/App.css';
import React, { useEffect } from 'react';
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/lib/css/styles.css";
import {useState} from 'react';
  


function App() {

  const HSVtoRGB = (h,s,l) => {
   s=s/100;
   l=l/100;
  let c = (1 - Math.abs(2 * l - 1)) * s,
      x = c * (1 - Math.abs((h / 60) % 2 - 1)),
      m = l - c/2,
      r = 0,
      g = 0,
      b = 0;
    
    if (0 <= h && h < 60) {
      r = c; g = x; b = 0;  
    } 
    else if (60 <= h && h < 120) {
      r = x; g = c; b = 0;
    } 
    else if (120 <= h && h < 180) {
      r = 0; g = c; b = x;
    } 
    else if (180 <= h && h < 240) {
      r = 0; g = x; b = c;
    } 
    else if (240 <= h && h < 300) {
      r = x; g = 0; b = c;
    } 
    else if (300 <= h && h < 360) {
      r = c; g = 0; b = x;
    }
    r = Math.round((r + m) * 255);
    g = Math.round((g + m) * 255);
    b = Math.round((b + m) * 255);
  
    b=b.toString(16);
    g=g.toString(16);
    r=r.toString(16);
    return '#'+r+g+b;
    
};

  const getComplementaryColor = (color = '') => {
    const colorPart = color.slice(1);
    const ind = parseInt(colorPart, 16);
    let iter = ((1 << 4 * colorPart.length) - 1 - ind).toString(16);
    while (iter.length < colorPart.length) {
       iter = '0' + iter;
    };
    return '#' + iter;
 };

 const getMonochromaticColor = (color = '') => {
   if( parseInt(color.slice(5,7), 16) >20 )
   {
    var x = parseInt(color.slice(5,7) , 16)-20;
   }
   else x = parseInt(color.slice(5,7) , 16);

   if(parseInt(color.slice(3,5) , 16)>20)
   {
    var y= parseInt(color.slice(3,5) , 16)-20;
   }
   else y = parseInt(color.slice(3,5) , 16);

   if(parseInt(color.slice(1,3) , 16)>20)
   {
    var z=  parseInt(color.slice(1,3) , 16)-20;
   }
  else z=  parseInt(color.slice(1,3) , 16);
  
  const b=x.toString(16);
  const g=y.toString(16);
  const r=z.toString(16);
  console.log(x,y,z);
  return '#' + r+g+b;
};

  const [color, setColor] = useColor("hex", "#123412");
  const [outColor, setoutColor] = useState('Complimentary');
  const [div1color, setdiv1color] = useState();
  const [div2color, setdiv2color] = useState();
  const [div3color, setdiv3color] = useState();
  const [div4color, setdiv4color] = useState();

  const palette_options = [
    { text: "Complimentary"},
    { text: "Triadic"},
    { text: "Tetradic"},
    { text: "Monochromatic"}
  ];

  useEffect(()=>{

    console.log(color);
    if(outColor==='Complimentary')
    {
      setdiv1color(color.hex);
      setdiv2color(color.hex);
      setdiv3color(getComplementaryColor(color.hex));
      setdiv4color(getComplementaryColor(color.hex));
    }
    if(outColor==='Monochromatic')
    {
      setdiv1color(color.hex);
      setdiv2color(getMonochromaticColor(div1color));
      setdiv3color(getMonochromaticColor(div2color));
      setdiv4color(getMonochromaticColor(div3color));
    }
    if(outColor==='Triadic')
    {
      const h1=color.hsv.h;
      const h2=(color.hsv.h+120)%360;
      const h3=(color.hsv.h+240)%360;
      const s=color.hsv.s;
      const v=color.hsv.v;
      setdiv2color(HSVtoRGB(h1,s,v));
      setdiv1color(color.hex);
      setdiv3color(HSVtoRGB(h2,s,v));
      setdiv4color(HSVtoRGB(h3,s,v));
      
    }
    if(outColor==='Tetradic')
    {
      const h1=color.hsv.h;
      const h2=(color.hsv.h+90)%360;
      const h3=(color.hsv.h+180)%360;
      const h4=(color.hsv.h+270)%360;
      const s=color.hsv.s;
      const v=color.hsv.v;
      setdiv2color(HSVtoRGB(h2,s,v));
      setdiv1color(HSVtoRGB(h1,s,v));
      setdiv3color(HSVtoRGB(h3,s,v));
      setdiv4color(HSVtoRGB(h4,s,v));
      
    }
    console.log(color.hsv); 

  }, [palette_options, outColor, div1color, div2color, div3color, div4color]);

  return (
    <div className="App">
      <h1>Color Palette Generator</h1>
      
      <div>
        <div style={{'display':'flex', 'margin-top':'50px', 'margin-left':'20%', 'width':'60%', 'border':'1px solid black'}}>
          <div className='color' id='1' style={{'width':'25%', 'backgroundColor':`${div1color} `, 'height':'200px' ,}}> <span className='s1' id='i1'> {div1color} </span>   </div>
          <div className='color' id='2' style={{'width':'25%', 'backgroundColor':`${div2color} ` , 'height':'200px',}}> <span className='s1' id='i2'> {div2color} </span></div>
          <div className='color' id='3' style={{'width':'25%', 'backgroundColor':`${div3color} ` , 'height':'200px',}}> <span className='s1' id='i3' value={div3color}> {div3color} </span> </div>
          <div className='color' id='4' style={{'width':'25%', 'backgroundColor':`${div4color} ` , 'height':'200px',}}> <span className='s1' id='i4'> {div4color} </span></div>
        </div>
      </div><span id='color-sel' hidden>{color.hex}</span>
      <div>
        <center>
             Pick a color
               <ColorPicker width={456} height={150} 
                   color={color} 
                   onChange={setColor} hideHSV dark id='color-pick'/>
              
              <select onChange={e=>setoutColor(e.target.value)} id="list">

                    {palette_options.map((text, index) => (
                      <option key={text.key} id="options">
                        {text.text}
                      </option>

                    ))}
              </select>
              
          
        </center>
        
    </div>
    
    </div>
  );
}

export default App;
