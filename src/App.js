import React, { Component } from "react";
import { NavLink, Route } from "react-router-dom";
import { Container } from "semantic-ui-react";

import Tracks from "./pages/tracks_page";
import List from "./pages/form_page";
import About from "./pages/about_page";

class App extends Component {
  render() {
    return (
      <Container>
        <div className="ui two item menu">
          <NavLink className="item" activeClassName="active" exact to="/">
            Tracks
          </NavLink>
          &nbsp;
          <NavLink className="item" activeClassName="active" to="/add">
            List
          </NavLink>
          &nbsp;
          <NavLink className="item" activeClassName="active" to="/about">
            About
          </NavLink>
        </div>

        <Route exact path="/" component={Tracks} />
        <Route path="/add" component={List} />
        <Route path="/about" component={About} />
      </Container>
    );
  }
}
export default App;
