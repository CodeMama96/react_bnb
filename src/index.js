import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {Provider} from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import listingsReducer from './reducers/listingsReducer.js'
//import './bootstrap.min.css';

import './App.css';


// import './index.css'

//Redux Thunk middleware allows you to write action creators that return a function instead of an action.
const store =createStore(listingsReducer, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
  <App />
</Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

