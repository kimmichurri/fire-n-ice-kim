import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App/App.js';
import rootReducer from './reducers/index';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';

const store = createStore(rootReducer, composeWithDevTools());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
, document.getElementById('root'));
