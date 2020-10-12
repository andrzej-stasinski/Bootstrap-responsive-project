import React from 'react';
import './styles/App.css';
import Navbar from './Navbar';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './components/Home';
import Dankmenu from './components/Dankmenu';
import Features from './components/Features';
import MoreDeets from './components/MoreDeets';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
// import './styles/PageContainer.css';

function App() {
  return (
  <Router>

      <div className="page-container">
        <div className="content-wrap">
          <Navbar />
      
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
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

          <Footer />
        </div>

  </Router>  

  );
}

export default App;
