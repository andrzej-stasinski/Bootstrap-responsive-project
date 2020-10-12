import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route,Link } from "react-router-dom";
import Dankmenu from './components/Dankmenu';
import Features from './components/Features';
import MoreDeets from './components/MoreDeets';
import Pricing from './components/Pricing';

function App() {
  return (
  <Router>
    <div>
      <Navbar />
  
      <Switch>
          <Route path="/Features">
            <Features />
          </Route>
          <Route path="/MoreDeets">
            <MoreDeets />
          </Route>
          <Route path="/Pricing">
            <Pricing />
          </Route>
          <Route path="/Dankmenu">
            <Dankmenu />
          </Route>
        </Switch>
    </div>
  </Router>    
  );
}

export default App;
