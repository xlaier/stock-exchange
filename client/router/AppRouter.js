import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
  withRouter
} from "react-router-dom";

import App from '../components/App';
import Dashboard from '../components/Dashboard';
import PrivateRoute from '../components/SignIn';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';



function AppRouter() {
    return (
      	<Switch>
	          <Route exact path='/' component={SignIn} />
	          <Route path='/signup' component={SignUp} />
	          <Route path='/dashboard' component={Dashboard} />
      	</Switch>
    )
}

export default AppRouter;