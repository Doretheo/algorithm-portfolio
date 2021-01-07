import React from 'react';
import Navbar from './components/Navbar.js'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home'
import Services from './components/pages/Home'
import Products from './components/pages/Home'
import SignUp from './components/pages/Home'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/' exact component={Services}/>
          <Route path='/' exact component={Products}/>
          <Route path='/' exact component={SignUp}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
