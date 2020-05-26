import React, { Component } from "react";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./Home";
import Posts from "./Posts";
import GroceryList from "./GroceryList";
import TextComponent from "./TextComponent";

class Header extends Component {
  state = {
    isOpen: false,
  };

  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <Router>
        <Navbar />
        <br />
        <Route exact path="/" component={Home} />
        <Route path="/grocerylist" component={GroceryList} />
        <Route path="/posts" component={Posts} />
        <Route path="/text" component={TextComponent} />
      </Router>
    );
  }
}

export default Header;
