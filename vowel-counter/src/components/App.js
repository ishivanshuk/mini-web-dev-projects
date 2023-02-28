import React from 'react';
import '../styles/App.css';
import { useRef } from 'react';
import { useState } from 'react';



const App = () => {

  const ref = useRef(null);
const [count, setCount] = useState(0);

const countVowel = event =>{
  const str=ref.current.value;
  var x=0;

  const vowels = ["a", "e", "i", "o", "u"]
  if(str=="")
  {
      alert("Enter some text")
  }
  // loop through string to test if each character is a vowel
  for (let letter of str.toLowerCase()) {
      if (vowels.includes(letter)) {
          x++;
      }
  }
  console.log(x);
  setCount(x);
}


  return (
    <div id="main">
       <center>
             <h2>Vowel Counter</h2>
             <textarea cols="80" rows="10" id="inp" ref={ref}></textarea>
             <br/><br/>
             <button onClick={countVowel} value="Count Vowels" id="bt">Count Vowels</button>
             <br/><br/>
             Number of vowels: <input type="text" name="vowels" id="vowel-count" value={count}></input>
        </center>
      
    </div>
  )
}


export default App;
