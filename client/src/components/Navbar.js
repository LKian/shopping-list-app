import React, { Component } from "react";
import styled from "styled-components";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { Link } from "react-router-dom";

import Typography from "@material-ui/core/Typography";

class Navbar extends Component {
  state = {
    isOpen: false,
  };

  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <StyledNav>
        <List className="nav">
          <Typography variant="h6">News</Typography>
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
      </StyledNav>
    );
  }
}

const StyledNav = styled.div`
  .nav {
    display: flex;
  }
  .nav-logo {
    text-decoration: none;
    color: var(--primaryWhite);
    font-size: 36px;
    text-shadow: 1px 2px #000;
  }

  .MuiToolbar-regular.toolbar {
    display: flex;
    justify-content: space-between;
  }

  nav.nav {
    display: flex;
    justify-content: space-between;
  }

  header .MuiContainer-root {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  li.MuiListItem-root {
    width: auto;
  }

  .nav-link {
    text-decoration: none;
    color: #eee;
  }

  .MuiGrid-container.container {
    width: 80%;
    border: 2px dashed red;
    margin: auto;
  }
`;
export default Navbar;
