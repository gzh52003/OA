import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyMain from './MyMain';
import * as serviceWorker from './serviceWorker';

import { HashRouter, BrowserRouter } from 'react-router-dom'
import store from './store';
import {Provider} from 'react-redux'
import Main from './router/index'
import './assets/common/reset.scss';

const Router = process.env.NODE_ENV === 'development' ? HashRouter : BrowserRouter;

ReactDOM.render(
  <Provider store={store}>
    <Router>
     <MyMain />
      {/*  <Main /> */}
    </Router>
  </Provider>,
  document.getElementById('root')
);
serviceWorker.unregister();
