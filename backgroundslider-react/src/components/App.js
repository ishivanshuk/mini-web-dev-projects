import React from 'react'
import '../styles/App.css';
const App = () => {

  window.document.documentElement.style.backgroundImage ="url(https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80)" ;

  var activeSlide = 0;
const rightBt = event=> {
  activeSlide++

  if (activeSlide > options.length - 1) {
    activeSlide = 0
  }
  window.document.documentElement.style.backgroundImage = options[activeSlide].src;
  document.getElementById('container').style.backgroundImage=options[activeSlide].src;
  
  
};

const leftBt= event => {
  activeSlide--
  if (activeSlide < 0) {
    activeSlide = options.length - 1;
  }
  window.document.documentElement.style.backgroundImage = options[activeSlide].src;
  console.log(options[activeSlide]);
  document.getElementById('container').style.backgroundImage=options[activeSlide].src;
};

const options=[
  {key:"1" , src:"url(https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80)"},
  {key:"2" , src:"url(https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1934&q=80)"},
  {key:"3" , src:"url(https://images.unsplash.com/photo-1495467033336-2effd8753d51?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80)"},
  {key:"4" , src:"url(https://images.unsplash.com/photo-1559087867-ce4c91325525?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80)"},
  {key:"5" , src:"url(https://images.unsplash.com/photo-1522735338363-cc7313be0ae0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2689&q=80)"},
];


  return (

    <div id="main">
      <div className="App">
      
      <div
        className="slide" id='container'
        style={{backgroundImage:"url(https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80)"}}
         
      ></div>
      
      <button className="arrow left-arrow" id="left" onClick={leftBt}>
      <i class='fas fa-angle-double-left'></i>
      </button>

      <button className="arrow right-arrow" id="right" onClick={rightBt}>
      <i class='fas fa-angle-double-right'></i>
      </button>
    </div>
    </div>
  )
}


export default App;
