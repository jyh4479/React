import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// /* redux 설정 */ --> 책임님이랑 작성한 코드
// import{Provider} from "react-redux";
// import{combineReducers,createStore} from "redux";
// import reducers from './redux/reducers';
//
// const store = createStore(combineReducers(reducers),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
//
// ReactDOM.render(
//   <Provider store={store}>
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>
//   </Provider>
//   ,
//   document.getElementById('root')
// );

import store from './store';
import{Provider} from "react-redux";
ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
  ,
  document.getElementById('root')
);
reportWebVitals();
