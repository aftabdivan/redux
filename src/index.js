import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import App from './App';
import App2 from './App2';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './service/reducers/index';

const store=createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App2 />
  </Provider>,
  document.getElementById('root')
);

