import React, { Component }  from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from "./pages/home";
import Portfolio from "./pages/portfolio";
import Contact from "./pages/contact";
import "./App.css";


class App extends Component {
  render() {
    return (
      <Router>
    <Switch>
      <Route path='/contact'>
        <Contact />
      </Route>
      <Route path='/portfolio'>
        <Portfolio />
      </Route>
      <Route path='/'>
        <Home />
      </Route>
    </Switch>
  </Router>
    )
  }

  
}

export default App;