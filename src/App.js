import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Nav from "./Components/Navigation/Nav";
import Home from "./Components/Home/Home";
import Contact from "./Components/Contact/Contact";
import About from "./Components/About/About";
import Footer from "./Components/Footer/Footer";
import Team from "./Components/Team/team";
import Alumnaies from "./Components/alumnaies/alumnaies.jsx";
import Events from "./Components/Event/event.jsx";

class App extends React.Component {
  state = {};

  render() {
    return (
      <div className="App">
        <div>
          <Router>
            <div className="nav">
              <Nav />
            </div>
            <div className="pusher"></div>
            <div className="cont">
              <Switch>
                <Route path="/" exact component={Home} />
                <div className="pageHandle">
                  <Route path="/about" component={About} />
                  <Route path="/contact" component={Contact} />
                  <Route path="/team" component={Team} />
                  <Route path="/events" component={Events} />
                  <Route path="/Alumnies" component={Alumnaies} />
                </div>
              </Switch>
            </div>
          </Router>
          <Footer />
          <div className="App"></div>
        </div>
      </div>
    );
  }
}
export default App;
