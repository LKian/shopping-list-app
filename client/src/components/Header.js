import React, { Component } from "react";
import styled from "styled-components";
import Navbar from "./Navbar";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";

class Header extends Component {
  state = {
    isOpen: false,
  };

  render() {
    return (
      <StyledAppbar>
        <AppBar position="static" className="styledHeader21">
          <Toolbar color="primary" className="toolbar ">
            <IconButton edge="start" color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Link to="/" className="nav-link nav-logo">
              L / K
            </Link>
            <Navbar />
          </Toolbar>
        </AppBar>
      </StyledAppbar>
    );
  }
}

const StyledAppbar = styled.div`
  header {
    margin-bottom: 25px;
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

export default Header;
