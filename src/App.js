import React, { Component } from 'react';
// import './App.less';
import store from "./redux/store";

import { Provider } from "react-redux";
import { Route, Switch, withRouter } from "react-router-dom";

import Layout from './pages/layout'

// if (localStorage.jwtToken) {
//   const token = localStorage.jwtToken;
//   setAuthToken(token);
//   const decoded = jwt_decode(token);
//   store.dispatch(setCurrentUser(decoded));
//   const currentTime = Date.now() / 1000; // to get milliseconds
//   if (decoded.exp < currentTime) {
//     store.dispatch(logoutUser());
//     window.location.href = "../";
//   }
// }

class App extends Component {

  render() {
    return (
    
        <div>
         <Provider store={store}>
        <div>
          <Route exact path="/" component={Layout} />
          </div>
          </Provider>
        </div>
    
    );
  }
}

export default withRouter(App);