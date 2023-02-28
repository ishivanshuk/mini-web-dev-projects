import React from 'react'
import {useState} from 'react';
import '../styles/App.css';

import {setCORS} from 'google-translate-api-browser';
const translate = setCORS("https://cors-anywhere.herokuapp.com/");

const App = () => {

 
  const [outLang, setOutLang] = useState("en");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const translateText = () => {
    translate(input, {to: outLang })
    .then(
      res => {
        setOutput(res.text);
        console.log({outLang});
      }
    )
        
  };
  
  const languageoptions = [
    {key:"auto",   text: "Automatic"},
    {key:"af " ,   text: "Afrikaans"},
    {key:"sq " ,   text: "Albanian"},
    {key:"am " ,   text: "Amharic"},
    {key:"ar " ,   text: "Arabic"},
    {key:"hy " ,   text: "Armenian"},
    {key:"az " ,   text: "Azerbaijani"},
    {key:"eu " ,   text: "Basque"},
    {key:"be " ,   text: "Belarusian"},
    {key:"bn " ,   text: "Bengali"},
    {key:"bs " ,   text: "Bosnian"},
    {key:"bg " ,   text: "Bulgarian"},
    {key:"ca " ,   text: "Catalan"},
    {key:"ceb" ,   text: "Cebuano"},
    {key:"ny " ,   text: "Chichewa"},
    {key:"zh " ,   text: "Chinese Simplified"},
    {key:"zh-cn", text:"Chinese Simplified"},
    {key:"zh-tw", text:"Chinese Traditional"},
    {key:"co",    text: "Corsican"},
    {key:"hr",    text: "Croatian"},
    {key:"cs",    text: "Czech"},
    {key:"da",    text: "Danish"},
    {key:"nl",    text: "Dutch"},
    {key:"en",    text: "English"},
    {key:"eo",    text: "Esperanto"},
    {key:"et",    text: "Estonian"},
    {key:"tl",    text: "Filipino"},
    {key:"fi",    text: "Finnish"},
    {key:"fr",    text: "French"},
    {key:"fy",    text: "Frisian"},
    {key:"gl",    text: "Galician"},
    {key:"ka",    text: "Georgian"},
    {key:"de",    text: "German"},
    {key:"el",    text: "Greek"},
    {key:"gu",    text: "Gujarati"},
    {key:"ht",    text: "Haitian Creole"},
    {key:"ha",    text: "Hawaiian"},
    {key:"he",    text: "Hebrew"},
    {key:"iw",    text: "Hebrew"},
    {key:"hi",    text: "Hindi"},
    {key:"hm",    text: "Hmong"},
    {key:"hu",    text: "Hungarian"},
    {key:"is",    text: "Icelandic"},
    {key:"ig",    text: "Igbo"},
    {key:"id",    text: "Indonesian"},
    {key:"ga",    text: "Irish"},
    {key:"it",    text: "Italian"},
    {key:"ja",    text: "Japanese"},
    {key:"jw",    text: "Javanese"},
    {key:"kn",    text: "Kannada"},
    {key:"kk",    text: "Kazakh"},
    {key:"km",    text: "Khmer"},
    {key:"ko",    text: "Korean"},
    {key:"ku",    text: "Kurdish (Kurmanji)"},
    {key:"ky",    text : "Kyrgyz"},
    {key:"lo",    text : "Lao"},
    {key:"la",    text : "Latin"},
    {key:"lv",    text : "Latvian"},
    {key:"lt",    text : "Lithuanian"},
    {key:"lb",    text : "Luxembourgish"},
    {key:"mk",    text : "Macedonian"},
    {key:"mg",    text : "Malagasy"},
    {key:"ms",    text : "Malay"},
    {key:"ml",    text : "Malayalam"},
    {key:"mt",    text : "Maltese"},
    {key:"mi",    text : "Maori"},
    {key:"mr",    text : "Marathi"},
    {key:"mn",    text : "Mongolian"},
    {key:"my",    text : "Myanmar (Burmese)"},
    {key:"ne",    text : "Nepali"},
    {key:"no",    text : "Norwegian"},
    {key:"ps",    text : "Pashto"},
    {key:"fa",    text : "Persian"},
    {key:"pl",    text : "Polish"},
    {key:"pt",    text : "Portuguese"},
    {key:"pa",    text : "Punjabi"},
    {key:"ro",    text : "Romanian"},
    {key:"ru",    text : "Russian"},
    {key:"sm",    text : "Samoan"},
    {key:"gd",    text : "Scots Gaelic"},
    {key:"sr",    text : "Serbian"},
    {key:"st",    text : "Sesotho"},
    {key:"sn",    text : "Shona"},
    {key:"sd",    text : "Sindhi"},
    {key:"si",    text : "Sinhala"},
    {key:"sk",    text : "Slovak"},
    {key:"sl",    text : "Slovenian"},
    {key:"so",    text : "Somali"},
    {key:"es",    text : "Spanish"},
    {key:"su",    text : "Sundanese"},
    {key:"sw",    text : "Swahili"},
    {key:"sv",    text : "Swedish"},
    {key:"tg",    text : "Tajik"},
    {key:"ta",    text : "Tamil"},
    {key:"te",    text : "Telugu"},
    {key:"th",    text : "Thai"},
    {key:"tr",    text : "Turkish"},
    {key:"uk",    text : "Ukrainian"},
    {key:"ur",    text : "Urdu"},
    {key:"uz",    text : "Uzbek"},
    {key:"vi",    text : "Vietnamese"},
    {key:"cy",    text : "Welsh"},
    {key:"xh",    text : "Xhosa"},
    {key:"yi",    text : "Yiddish"},
    {key:"yo",    text : "Yoruba"},
    {key:"zu",    text : "Zulu"}
];     

  return (
    <div id="main">
        <div className="App">
      <h2>Language Translator App</h2>
      <div id="outer-div">
        
      
      <div>
        <textarea cols="50" rows="8" onChange={(x)=> setInput(x.target.value)} placeholder="Enter text to be translated" id="input"></textarea>
      </div>

      To:
         <select onChange={e=>setOutLang(e.target.value)} id="list">

          {languageoptions.map((text, index) => (
            <option key={text.key} id="options">
              {text.text}
            </option>
         
          ))}
         </select>
      

      <div>
        <textarea cols="50" rows="8" value={output} placeholder="Output will appear here" id="output"></textarea>
      </div>

    
      </div>  
      
      <div>
        <button onClick={translateText} id="bt"> <span> Translate </span>  </button>
      </div>
    </div>
    </div>
  )

}


export default App;
