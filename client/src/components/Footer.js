import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Container from "@material-ui/core/Container";

class Footer extends Component {
  render() {
    return (
      <Container maxWidth="lg">
        <footer className="footer">
          <h3>Footer</h3>
        </footer>
      </Container>
    );
  }
}

export default Footer;
