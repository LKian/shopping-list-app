import React, { Component } from "react";
import styled from "styled-components";
import Container from "@material-ui/core/Container";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";

class Footer extends Component {
  render() {
    return (
      <FooterContainer className="footer">
        <Container className="footer-container">
          <Grid container spacing={4} className="footer-subcontainer">
            <Grid item xs={12} sm={6} md={3}>
              <h4>header 1</h4>
              <ul>
                <li>
                  <Link to="/">About</Link>
                </li>
                <li>
                  <Link to="/">Blog</Link>
                </li>
                <li>
                  <Link to="/">Footer Link 1.3</Link>
                </li>
                <li>
                  <Link to="/">Footer Link 1.4</Link>
                </li>
                <li>
                  <Link to="/">Footer Link 1.5</Link>
                </li>
              </ul>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <h4>header 1</h4>
              <ul>
                <li>
                  <Link to="/">Footer Link 2.1</Link>
                </li>
                <li>
                  <Link to="/">Footer Link 2.2</Link>
                </li>
                <li>
                  <Link to="/">Footer Link 2.3</Link>
                </li>
              </ul>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <h4>Contact</h4>
              <ul>
                <li>
                  <Link to="/contact">Send a Message</Link>
                </li>
                <li>
                  <Link to="/">Footer Link 3.2</Link>
                </li>
                <li>
                  <Link to="/">Footer Link 3.3</Link>
                </li>
              </ul>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <h4>Social</h4>
              <ul>
                <li>
                  <Link to="/">Footer Link 4.1</Link>
                </li>
                <li>
                  <Link to="/">Footer Link 4.2</Link>
                </li>
                <li>
                  <Link to="/">Footer Link 4.3</Link>
                </li>
              </ul>
            </Grid>
            <Grid item xs={12} className="footer-copyright">
              <p>
                &copy;{new Date().getFullYear()} <Link to="/">LK</Link>
              </p>
            </Grid>
          </Grid>
        </Container>
      </FooterContainer>
    );
  }
}

const FooterContainer = styled.footer`
  .footer-container {
    background: var(--primaryDark);
    padding-top: 3rem;
    color: var(--primaryLight);
    max-width: 100%;
  }

  .footer-subcontainer {
    max-width: 80%;
    margin: auto;
  }

  .footer-copyright {
    padding: 2rem 0 1rem;
  }

  ul {
    list-style-type: none;
    padding: 0;
    margin-bottom: 48px;
  }

  .footer-subcontainer h4 {
    text-transform: capitalize;
    margin: 0;
  }

  ul li {
    line-height: 1.4rem;
  }

  a {
    color: var(--primaryLight);
    text-decoration: none;
    line-height: 1.2;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export default Footer;
