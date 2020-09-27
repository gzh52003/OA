import React from 'react';
import ReactDOM from 'react-dom';
import LoginApp from './LoginApp';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { HashRouter, BrowserRouter } from 'react-router-dom';
import store from './store';
import { Provider } from 'react-redux'

const Router = process.env.NODE_ENV === 'development' ? HashRouter : BrowserRouter;

ReactDOM.render(
  <Provider store={store}>
    <Router>
      {/* {localStorage.getItem("token") ? <App /> : <LoginApp />} */}
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
