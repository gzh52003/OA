import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyMain from './MyMain';
import * as serviceWorker from './serviceWorker';

import { HashRouter, BrowserRouter } from 'react-router-dom'

const Router = process.env.NODE_ENV === 'development' ? HashRouter : BrowserRouter;

ReactDOM.render(
  // <React.StrictMode>
  <Router>
    <MyMain />
  </Router>,
  // </React.StrictMode>,
  document.getElementById('root')
);
serviceWorker.unregister();
