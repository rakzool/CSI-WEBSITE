import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Nav from "./Components/Navigation/Nav";
import Home from "./Components/Home/Home";
import Contact from "./Components/Contact/Contact";
import About from "./Components/About/About";

class App extends React.Component {
  state = {};

  render() {
    return (
      <div className="App">
        <div>
          <Router>
            <Nav />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
            </Switch>
          </Router>

          <div className="App"></div>
        </div>
      </div>
    );
  }
}
export default App;
