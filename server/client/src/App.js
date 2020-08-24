import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Login from './scenes/Login';
import Signup from './scenes/Signup';

function App() {
  return (
    <BrowserRouter>
      <Switch>
      <Route path="/signup">
          <Signup/>
        </Route>
        <Route path="/">
          <Login/>
        </Route>
      
      </Switch>
    </BrowserRouter>
  );
}

export default App;
