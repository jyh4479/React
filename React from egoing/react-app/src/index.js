import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'; //.js가 생략된것
import App2 from './App2'
import reportWebVitals from './reportWebVitals';

//react로 만든 컴포넌트 Tag이름은 root로 정의
ReactDOM.render(
  <React.StrictMode>
    {/*  <App />  */}
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
