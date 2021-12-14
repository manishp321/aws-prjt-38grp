import React from 'react'
import './App.css';

import {BrowserRouter ,Switch, Route, Redirect } from "react-router-dom";
import Home from './components/Home';
import Menu from './components/Menu';
import Signup from './components/Signup';
import Login from './components/Login';
import Vendor from './components/Vendor';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/menu" component={Menu} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/vendor" component={Vendor} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
