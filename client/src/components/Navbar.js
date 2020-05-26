import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { Link } from "react-router-dom";
import Container from "@material-ui/core/Container";

class Navbar extends Component {
  state = {
    isOpen: false,
  };

  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <AppBar color="primary" position="static">
        <Toolbar className="toolbar">
          <Container maxWidth="lg">
            <Link to="/" className="nav-link nav-logo">
              L / K
            </Link>
            <List component="nav" className="nav">
              <ListItem component="li">
                <Link to="/posts" className="nav-link">
                  Posts
                </Link>
              </ListItem>
              <ListItem component="li">
                <Link to="/groceries" className="nav-link">
                  Groceries
                </Link>
              </ListItem>
              <ListItem component="li">
                <Link to="text" className="nav-link">
                  Link 3
                </Link>
              </ListItem>
            </List>
          </Container>
        </Toolbar>
      </AppBar>
    );
  }
}

export default Navbar;
