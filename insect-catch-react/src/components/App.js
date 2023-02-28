import React, { useRef } from 'react';
import { useState } from 'react';
import '../styles/App.css';
const App = () => {

  const ref=useRef(null);
const ref1=useRef(null);
let seconds = 0
let score = 0 
let selected_insect = {}

const [selectedbt, setSelectedbt] = useState();

const select_insect =event=>{
        
        console.log(selectedbt);
        const btn=document.getElementById(selectedbt);
        const img = btn.querySelector('img')
        const src = img.getAttribute('src')
        const alt = img.getAttribute('alt')
        selected_insect = { src, alt }
        ref1.current.className='screen up'
        setTimeout(createInsect, 1000)
        startGame();
        
}

function startGame() {
    setInterval(increaseTime, 1000)
    console.log(selectedbt);
}

function increaseTime() {
    let m = Math.floor(seconds / 60)
    let s = seconds % 60
    m = m < 10 ? `0${m}` : m
    s = s < 10 ? `0${s}` : s
    document.getElementById('time').innerHTML = `Time: ${m}:${s}`
    seconds++
}

function createInsect() {
    const insect = document.createElement('div')
    insect.classList.add('insect')
    const { x, y } = getRandomLocation()
    insect.style.top = `${y}px`
    insect.style.left = `${x}px`
    insect.innerHTML = `<img src="${selected_insect.src}" alt="${selected_insect.alt}" style="transform: rotate(${Math.random() * 360}deg)" />`

    insect.addEventListener('click', catchInsect)

    document.getElementById('game-container').appendChild(insect)
}

function getRandomLocation() {
    const width = window.innerWidth
    const height = window.innerHeight
    const x = Math.random() * (width - 200) + 100
    const y = Math.random() * (height - 200) + 100
    return { x, y }
}

function catchInsect() {
    increaseScore()
    this.classList.add('caught')
    setTimeout(() => this.remove(), 2000)
    addInsects()
}

function addInsects() {
    setTimeout(createInsect, 1000)
    setTimeout(createInsect, 1500)
}

function increaseScore() {
    score++
    if(score > 2) {
      document.getElementById('message').classList.add('visible')
    }
    document.getElementById('score').innerHTML = `Score: ${score}`
}

  return (
    <div id="main">
      
      <div className="screen" ref={ref}>
      <h1>Catch The Insect</h1>
      <button className="btn" id="start-btn" onClick={(event) => ref.current.className='screen up'}>Play Game</button>
      </div>

      <div className="screen" ref={ref1}>
      <h1>What is your "favorite" insect?  </h1>
      (Double Click to Select)
      <ul className="insects-list">
        <li>
          <button className="choose-insect-btn" onClick={ () => { setSelectedbt('bt0'); select_insect(); }} id='bt0'>
            <p>Fly</p>)
            <img src="http://pngimg.com/uploads/fly/fly_PNG3946.png" alt="fly" />
          </button> 
        </li>
        <li>
          <button className="choose-insect-btn" onClick={ () => { setSelectedbt('bt1'); select_insect(); }} id='bt1'>
            <p>Mosquito</p>
            <img
               src="http://pngimg.com/uploads/mosquito/mosquito_PNG18175.png"
               alt="mosquito"
               />
          </button>
        </li>
        <li>
          <button className="choose-insect-btn" onClick={ () => { setSelectedbt('bt2'); select_insect(); }} id='bt2'>
            <p>Spider</p>
            <img
               src="http://pngimg.com/uploads/spider/spider_PNG12.png"
               alt="spider"
               />
          </button>
        </li>
        <li>
          <button className="choose-insect-btn" onClick={ () => { setSelectedbt('bt3'); select_insect(); }}  id='bt3'>
            <p>Roach</p>
            <img
               src="http://pngimg.com/uploads/roach/roach_PNG12163.png"
               alt="roach"
               />
          </button>
        </li>
      </ul>
    </div>

    <div className="screen game-container" id="game-container">
      <h3 id="time" className="time">Time: 00:00</h3>
      <h3 id="score" className="score">Score: 0</h3>
      <h5 id="message" className="message">
        Are you annnoyed yet? <br/>
        You are playing an impossible game!!
      </h5>
    
    </div>
      
    </div>
  )
}


export default App;
