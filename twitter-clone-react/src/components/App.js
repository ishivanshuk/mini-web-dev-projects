import React from 'react';
import Sidebar from "./components/Sidebar";
import Tweets from "./components/Tweets"
import Trends from "./components/Trends";
import '../styles/App.css';
const App = () => {

  return (
    <div id="main">
      <div className="twitter">
          <Sidebar />
          <Tweets/>
          <Trends />
      </div>
    </div>
  );
}

export default App;
