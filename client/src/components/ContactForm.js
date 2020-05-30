import React, { Component } from "react";

import Container from "@material-ui/core/Container";

class ContactForm extends Component {
  state = {
    contactName: "",
    contactEmail: "",
    contactMessage: "",
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <Container maxWidth="lg" className="section">
        <h2>Contact Form</h2>
        <form>
          <input
            name="contactName"
            type="text"
            value={this.state.name}
            placeholder="name"
            label="Enter your name"
            onChange={(e) => this.onChange(e)}
          ></input>
          <input
            name="contactEmail"
            type="email"
            value={this.state.name}
            placeholder="email"
            label="Enter your name"
            onChange={(e) => this.onChange(e)}
          ></input>
          <textarea
            name="contactMessage"
            rows="10"
            value={this.state.name}
            placeholder="Enter a message"
            label="Enter a message"
            onChange={(e) => this.onChange(e)}
          ></textarea>
          <button onClick={(e) => this.onSubmit(e)}>Submit</button>
        </form>
      </Container>
    );
  }
}

export default ContactForm;
