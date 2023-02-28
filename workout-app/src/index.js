import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { Chest } from './components/parts/Chest';
import { Arms } from './components/parts/Arms';
import { Abs } from './components/parts/Abs';
import { Legs } from './components/parts/Legs';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
        <Route path="/" element={<App />}/>
        <Route path="chest" element={<Chest />} />
        <Route path="legs" element={<Legs/>} />
        <Route path="arms" element={<Arms />} />
        <Route path="abs" element={<Abs />} />
        
      
    </Routes>
  </BrowserRouter>
);
