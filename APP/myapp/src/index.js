import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyMain from './MyMain';
import * as serviceWorker from './serviceWorker';

import {HashRouter,BrowserRouter} from 'react-router-dom'
import store from './store';
import {Provider} from 'react-redux'

const Router = process.env.NODE_ENV === 'development' ? HashRouter : BrowserRouter;

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <MyMain />
    </Router>
  </Provider>,
  document.getElementById('root')
);
serviceWorker.unregister();
