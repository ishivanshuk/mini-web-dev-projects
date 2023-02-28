import React from 'react'
import '../styles/App.css';
const App = () => {

  return (
    <div id="main">
      <header class="wrapper">
      <h1>
        Reliable, efficient delivery        <strong>Powered by Technology</strong>
      </h1>

      <p>
        Our Artificial Intelligence powered tools use millions of project data
        points to ensure that your project is successful
      </p>
    </header>

    <main class="wrapper">
      <section class="card supervisor">
        <div class="topBorder"></div>
        <div class="cardContent">
          <div class="cardText">
            <h2>Supervisor</h2>
            <p>Monitors activity to identify project roadblocks</p>
          </div>

          <img src="https://raw.githubusercontent.com/shivanshu2410/images-for-project/19981a6f9163fe20fc1bf0c0d514001d4f8f13f8/icon-supervisor.svg" alt="" />
        </div>
      </section>

      <section class="card teamBuilder">
        <div class="topBorder"></div>
        <div class="cardContent">
          <div class="cardText">
            <h2>Team Builder</h2>
            <p>
              Scans our talent network to create the optimal team for your
              project
            </p>
          </div>

          <img src="https://raw.githubusercontent.com/shivanshu2410/images-for-project/19981a6f9163fe20fc1bf0c0d514001d4f8f13f8/icon-team-builder.svg" alt="" />
        </div>
      </section>

      <section class="card karma">
        <div class="topBorder"></div>
        <div class="cardContent">
          <div class="cardText">
            <h2>Karma</h2>
            <p>Regularly evaluates our talent to ensure quality</p>
          </div>

          <img src="https://raw.githubusercontent.com/shivanshu2410/images-for-project/19981a6f9163fe20fc1bf0c0d514001d4f8f13f8/icon-karma.svg" alt="" />
        </div>
      </section>

      <section class="card calculator">
        <div class="topBorder"></div>
        <div class="cardContent">
          <div class="cardText">
            <h2>Calculator</h2>
            <p>
              Uses data from past projects to provide better delivery estimates
            </p>
          </div>

          <img src="https://raw.githubusercontent.com/shivanshu2410/images-for-project/19981a6f9163fe20fc1bf0c0d514001d4f8f13f8/icon-calculator.svg" alt="" />
        </div>
      </section>
    </main>
      
    </div>
  )
}


export default App;
