import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PrimeraApp from './PrimeraApp';
import CounterApp from './CounterApp';

const divRoot = document.querySelector('#app');

//ReactDOM.render(<PrimeraApp saludo='Hola, soy Pepe'/>, divRoot);

ReactDOM.render(<CounterApp value={2} />, divRoot);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
