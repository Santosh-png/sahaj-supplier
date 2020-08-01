import React from 'react';

import './App.css';

import {Route,Switch, BrowserRouter as Router } from 'react-router-dom'

import HomePage from './pages/homepage/homepage.component';
import Dashboard from './pages/dashboard/dashboard.page';

function App() {
  return (
    <div className="App">
          <Router>
              <Switch>
                  <Route exact path='/' component={HomePage} />
                  <Route path='/cpanel' component={Dashboard} />
              </Switch>
          
          </Router>
    </div>
  );
}

export default App;
