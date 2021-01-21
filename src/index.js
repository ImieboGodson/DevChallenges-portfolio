import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './container/Portfolio';
import reportWebVitals from './reportWebVitals';
import ReusableComponents from './container/ReusableComponents';

ReactDOM.render(
  <React.StrictMode>
    <ReusableComponents />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
