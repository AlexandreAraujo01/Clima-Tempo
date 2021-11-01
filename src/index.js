import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {ClimateProvider} from './Data/store'


ReactDOM.render(
  <ClimateProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </ClimateProvider>
  ,
  document.getElementById('root')
);


