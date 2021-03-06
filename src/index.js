import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Provider } from 'mobx-react'

import store from './stores'

ReactDOM.render(
  <Provider {...store}>
  	<App />
  </Provider>,
  document.getElementById('root'));
