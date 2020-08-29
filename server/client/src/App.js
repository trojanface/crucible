import React, { createContext } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Login from './scenes/Login';
import Signup from './scenes/Signup';
import Home from './scenes/Home';
import AddExercise from './scenes/AddExercise';
import AddEquipment from './scenes/AddEquipment';
import Progress from './scenes/Progress';
import Workout from './scenes/Workout';
import Settings from './scenes/Settings';
import { StateProvider } from './GlobalContext'
function App() {
  const userContext = createContext({},()=>{});

  return (
    <StateProvider>
      <BrowserRouter>
        <Switch>
          <Route path="/newexercise">
            <AddExercise />
          </Route>
          <Route path="/newequipment">
            <AddEquipment />
          </Route>
          <Route path="/progress">
            <Progress />
          </Route>
          <Route path="/workout">
            <Workout />
          </Route>
          <Route path="/settings">
            <Settings />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/">
            <Login />
          </Route>

        </Switch>
      </BrowserRouter>
    </StateProvider>
  );
}

export default App;
