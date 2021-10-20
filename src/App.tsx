import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import { Login } from './modules/login';
import { Home } from './modules/home';

function App() {
  return (
    <div className="App">
      <Router>
        <div className="App">
          <Route path="/" exact component={Login} />
          <Route path="/home" exact component={Home} />
        </div>
      </Router>

    </div>
  );
}

export default App;
