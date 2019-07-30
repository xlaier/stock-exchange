import React from 'react';
import { BrowserRouter as Hashrouter, Switch, Route, Link } from "react-router-dom";

import ToolsStore from '../stores/ToolsStore';
import ToolsActions from '../actions/ToolsActions';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Dashboard from './Dashboard';
import AppRouter from '../router/AppRouter';

import './App.less';





const App = React.createClass({


	render() {
		<HashRouter>
    		<AppRouter />
  		</HashRouter>	
	},

	
});

export default App;