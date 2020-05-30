import React, { Component } from "react";
import Navbar from "./Navbar";

class Header extends Component {
  state = {
    isOpen: false,
  };

  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return <Navbar />;
  }
}

export default Header;
