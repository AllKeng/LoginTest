import React from 'react';
import { BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'; // v5 not v6

import './App.css';
import Tabs from './components/Login/Tabs';
import Home from './components/Home/Home';
import Navbar from './components/Navbar';
import Play from './components/Play/Play';

function App() {
  return (
      <BrowserRouter>
        <Navbar />
        <Switch>
        <Route exact path="/">
              <Redirect to="/login" />
          </Route>

          <Route path="/login">
            <Tabs />
          </Route>

          <Route path="/home">
            <Home />
          </Route>

          <Route path="/play">
            <Play />
          </Route>

        </Switch>
      </BrowserRouter>
  );
}

export default App;