import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux'; 
import { HaikuGenerator } from './reducers/index';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(
  HaikuGenerator
)

ReactDOM.render(
  <Provider store={store}>
  <App />
  </Provider>, 
  
  
  document.getElementById('root'));
registerServiceWorker();
