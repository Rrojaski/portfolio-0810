import React, { Component } from "react";
import Home from "./Home/Home";
import Contact from "./Contact/Contact";
import { Switch, Route } from "react-router-dom";

class Content extends Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route exact={true} path="/" component={Home} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default Content;
