import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
//importamos BrowserRouter que permite gestionar rutas con react
import {BrowserRouter as Router} from "react-router-dom";
import App from './components/App';


{/*Decirle que va a atrabajar con rutas*/}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <App /> 
    </Router>
  </React.StrictMode>
);
