import React from 'react';
import ReactDOM from 'react-dom';
import ReactRouterDOM from "react-router-dom";

import App from './components/App.js';
import AppRouter from './router/AppRouter.js';

const {
  HashRouter,
  Switch,
  Route,
  Link
} = ReactRouterDOM

ReactDOM.render((
  <HashRouter>
    <AppRouter />
  </HashRouter>
	),
    document.getElementById('root')
);