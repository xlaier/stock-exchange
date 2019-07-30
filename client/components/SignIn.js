import React from 'react';
import axios from 'axios';
import { BrowserRouter as Hashrouter, Switch, Route, Link } from "react-router-dom";

import { apiPrefix } from '../../etc/config.json';

import './Signin.less'

export const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    this.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

// export function PrivateRoute({ component: Component, ...rest }) {
//   return (
//     <Route
//       {...rest}
//       render={props =>
//        <Component {...props} />
//       }
//     />
//   );
// }

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.signIn = this.signIn.bind(this);
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.state = {
          username:'',
          password:''
        };
    }

    signIn(){
        axios.post(`${apiPrefix}/signin`, {
          username: this.state.username,
          password: this.state.password
        })
        .then(function (response) {
            
            if (response.data == "Success"){
               window.location.assign('/#/dashboard');

            } else {
                alert(response.data);
            }
            
        })
        .catch(function (error) {
          console.log(error);
        });
    }

    handleUsernameChange(e){
        this.setState({username:e.target.value})
    }

    handlePasswordChange(e){
        this.setState({password:e.target.value})
    }

    render() {
        return (
            <div className="SignIn">
                <form className="form-signin">
                    <h2 className="form-signin-heading"> Please sign in </h2>
                    <label for="inputUsername" className="sr-only">Username</label>
                    <input type="username" onChange={this.handleUsernameChange} id="inputUsername" className="form-control" placeholder="Username" required autofocus />
                    <label for="inputPassword" className="sr-only">Password</label>
                    <input type="password" onChange={this.handlePasswordChange} id="inputPassword" className="form-control" placeholder="Password" required />
                    <button className="btn btn-lg btn-primary btn-block" onClick={this.signIn} type="button">Sign in</button>
                </form>
                <div>
                    <Link to="/signup">{'Signup'}</Link>
                </div>
            </div>
        )
    }
};

export default SignIn;

