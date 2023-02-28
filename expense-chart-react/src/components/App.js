import React from 'react'
import '../styles/App.css';
import data from '../Data'; 
const App = () => {
  window.addEventListener('load',async ()=>{
    
    const chart = document.querySelector('.card__body-chart');
    
        data.forEach( (item , index)=>{
            chart.innerHTML += 
            `
                <div class="chart-item ${index == 2 ? "active" : ""}" >
                    <div class="chart-item__bar">
                        <div class="inner-bar" 
                            data-chart=${item.amount} 
                            style="transition-delay: ${index*0.02}s;">
    
                            <div class="amount">
                            $${item.amount}
                            </div>
    
                        </div>
                        
                    </div>
                    <p class="day-name">${item.day}</p>
                </div>
            `;
        })
       setTimeout( ()=>{
        const chartItems = document.querySelectorAll('.chart-item .inner-bar');
    chartItems.forEach( (item , index ) =>{
        item.style.height = `${item.dataset.chart/5}rem`;
        //item.style.transitionDelay = `${index*0.02}s`;
    });
    } ,150);
});

  return (
    <div id="main">
      <main className="container">
      <div className="card">
        <div className="card__head">
          <div className="card__head-info">
            <p className="title">My balance</p>
            <h1 className="total">$921.48</h1>
          </div>
          
        </div>

        <div className="card__body">
          <h2 className="card__body-title">Spending - Last 7 days</h2>
          <div className="card__body-chart">
         
          </div>

          <div className="card__body-footer">
            <div className="current-month">
              <p className="title">Total this month</p>
              <h3 className="total">$478.33</h3>
            </div>

            <div className="last-month">
              <p className="total">+2.4%</p>
              <p className="title">from last month</p>
            </div>
          </div>
        </div>
      </div>
    </main>
    </div>
  )
}


export default App;
