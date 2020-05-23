import React, { Component } from "react";
import List from "@material-ui/core/List";
import Button from "@material-ui/core/Button";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import TextField from "@material-ui/core/TextField";
import DeleteIcon from "@material-ui/icons/Delete";

var axios = require("axios");

class GroceryList extends Component {
  state = {
    groceryItem: "",
    groceryItemDB: "",
    groceryList: [
      { name: "Milk", id: "Milk1" },
      { name: "Eggs", id: "Eggs1" },
      { name: "Lettuce", id: "Lettuce1" },
      { name: "Crackers", id: "Crackers1" },
      { name: "Chicken", id: "Chicken1" },
    ],
    groceryListDB: [],
  };

  getAllItemsFromDB = () => {
    return axios
      .get("http://localhost:5000/groceries/")
      .then((res) => {
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

  handleChange = (e) => {
    this.setState({ groceryItem: e.target.value });
  };

  // addItemX = (e) => {
  //   e.preventDefault();

  //   const groceryItem = {
  //     name: this.state.groceryItem,
  //     id: this.state.groceryItem,
  //   };

  //   const groceryList = [...this.state.groceryList, groceryItem];

  //   this.setState({ groceryList, groceryItem: "" });
  // };

  addItemToDB = (e) => {
    e.preventDefault();
    const groceryItemDB = {
      name: this.state.groceryItemDB,
      id: this.state.groceryItemDB,
    };
    axios
      .post("http://localhost:5000/groceries", groceryItemDB)
      .then((res) => {
        this.setState((prevState) => ({
          groceryItemDB: "",
          groceryListDB: [...this.state.groceryListDB, res.data.name],
        }));
      })
      .catch((e) =>
        this.setState({ error: "People who use grocery lists are no fun" })
      );
  };

  deleteItem = (e) => {
    this.setState({
      groceryList: this.state.groceryList.filter(
        (currentGroceryItem) => currentGroceryItem.id !== e.currentTarget.id
      ),
    });
  };

  render() {
    const { groceryList, groceryListDB } = this.state;
    const databaseItems = groceryListDB.map((databaseItem, item, id) => (
      <li>{databaseItem}</li>
    ));

    const groceryListElements = groceryList.map((items, key) => (
      <ListItem key={items.id}>
        <ListItemIcon className="icon-container">
          <DeleteIcon
            className="icon-delete"
            id={items.id}
            onClick={this.deleteItem}
          />
        </ListItemIcon>
        <ListItemText primary={items.name} />
      </ListItem>
    ));

    return (
      <div>
        <form id="grocery-list-db-form" onSubmit={this.addItemToDB}>
          <TextField
            id="outlined-basic-db"
            label="Add a grocery item to the database"
            value={this.state.groceryItemDB}
            onChange={this.handleChangeDB}
            variant="outlined"
          />
        </form>
        <Button onClick={this.getAllItemsFromDB}>GET FROM DB</Button>
        <ul>{databaseItems}</ul>
        <hr />
        {/* <form id="grocery-list-form" onSubmit={this.addItem}>
          <TextField
            id="outlined-basic"
            label="Add a grocery item"
            value={this.state.groceryItem}
            onChange={this.handleChange}
            variant="outlined"
          />
          <List component="ul" aria-label="main-shopping-list">
            {groceryListElements}
          </List>
        </form> */}
      </div>
    );
  }
}

export default GroceryList;
