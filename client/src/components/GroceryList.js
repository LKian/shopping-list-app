import React, { Component } from "react";
import List from "@material-ui/core/List";
import Button from "@material-ui/core/Button";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import TextField from "@material-ui/core/TextField";
import DeleteIcon from "@material-ui/icons/Delete";

import Container from "@material-ui/core/Container";

var axios = require("axios");

class GroceryList extends Component {
  state = {
    groceryItemDB: "",
    groceryListDB: [],
  };

  getAllItemsFromDB = () => {
    return axios
      .get("http://localhost:5000/groceries/")
      .then((res) => {
        console.log(
          "Grocery List: ",
          res.data.map((groceryItem) => groceryItem.name)
        );
        const groceryListDB = res.data;

        this.setState({ groceryListDB: groceryListDB });
      })
      .catch(function (err) {
        console.log(err);
      });
  };

  handleChangeDB = (e) => {
    this.setState({ groceryItemDB: e.target.value });
  };

  addItemToDB = (e) => {
    e.preventDefault();
    const groceryItemDB = {
      name: this.state.groceryItemDB,
      id: this.state.groceryItemDB,
    };
    axios
      .post("http://localhost:5000/groceries", groceryItemDB)

      .then((res) => {
        if (res.status === 200) {
          console.log("You added: ", res.data.name);
          this.setState((prevState) => ({
            groceryItemDB: "",
            groceryListDB: [...this.state.groceryListDB, res.data],
          }));
        }
      })
      .catch((e) =>
        this.setState({ error: "People who use grocery lists are no fun" })
      );
  };

  deleteItem = (id) => {
    axios.delete(`http://localhost:5000/groceries/${id}`).then((res) => {
      if (res.status === 200) {
        console.log("You deleted: ", id, res);
        this.setState((prevState) => ({
          groceryListDB: this.state.groceryListDB.filter(
            (currentGroceryItem) => currentGroceryItem._id !== id
          ),
        }));
      }
    });
  };

  render() {
    const { groceryList, groceryListDB } = this.state;

    const databaseItems = groceryListDB.map((databaseItem, index) => (
      <List className="list-condensed">
        <ListItem key={index.toString()}>
          <ListItemIcon className="icon-container">
            <DeleteIcon
              className="icon-delete"
              id={databaseItem._id}
              onClick={(e) => this.deleteItem(databaseItem._id)}
            />
          </ListItemIcon>
          <ListItemText primary={databaseItem.name} />
        </ListItem>
      </List>
    ));

    return (
      <Container maxWidth="lg" className="section">
        {this.state.error}
        <form id="grocery-list-db-form" onSubmit={this.addItemToDB}>
          <TextField
            id="grocery-item-name"
            label="Add a grocery item"
            value={this.state.groceryItemDB}
            onChange={this.handleChangeDB}
            variant="outlined"
          />
        </form>
        <Button onClick={this.getAllItemsFromDB}>See shopping list</Button>
        <ul>{databaseItems}</ul>
        <hr />
      </Container>
    );
  }
}

export default GroceryList;
