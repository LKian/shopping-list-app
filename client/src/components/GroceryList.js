import React, { Component } from "react";
import List from "@material-ui/core/List";
import Button from "@material-ui/core/Button";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import TextField from "@material-ui/core/TextField";
import DeleteIcon from "@material-ui/icons/Delete";

var axios = require("axios");
var cors = require("cors");

class GroceryList extends Component {
  state = {
    groceryItem: "",
    groceryList: [
      { name: "Milk", id: "Milk1" },
      { name: "Eggs", id: "Eggs1" },
      { name: "Lettuce", id: "Lettuce1" },
      { name: "Crackers", id: "Crackers1" },
      { name: "Chicken", id: "Chicken1" },
    ],
  };

  getAllItemsFromDB = () => {
    return (
      axios
        .get("http://localhost:5000/groceries/")
        // worked - i see data! should i implement  "app.use(cors()); " // ok cool. this shoudl be be good i guess
        // issue is we are calling localhost:5000  when we have to call localhost:5000/groceries ... if this has fixed the problem

        .then(function (res) {
          console.log("REEEEEEEEEEEEEEEES", res);
        })
        .catch(function (err) {
          console.log(err);
        })
    );
  };

  handleChange = (e) => {
    this.setState({ groceryItem: e.target.value });
  };

  addItem = (e) => {
    e.preventDefault();

    const groceryItem = {
      name: this.state.groceryItem,
      id: this.state.groceryItem,
    };

    const groceryList = [...this.state.groceryList, groceryItem];

    this.setState({ groceryList, groceryItem: "" });
  };

  deleteItem = (e) => {
    this.setState({
      groceryList: this.state.groceryList.filter(
        (currentGroceryItem) => currentGroceryItem.id !== e.currentTarget.id
      ),
    });
  };

  render() {
    const { groceryList } = this.state;
    return (
      <div>
        <Button onClick={this.getAllItemsFromDB}>GET FROM DB</Button>
        <form id="grocery-list-form" onSubmit={this.addItem}>
          <TextField
            id="outlined-basic"
            label="Add a grocery item"
            value={this.state.groceryItem}
            onChange={this.handleChange}
            variant="outlined"
          />
          <List component="ul" aria-label="main-shopping-list">
            {groceryList.map(({ name, id }) => (
              <ListItem key={id}>
                <ListItemIcon className="icon-container">
                  <DeleteIcon
                    className="icon-delete"
                    id={id}
                    onClick={this.deleteItem}
                  />
                </ListItemIcon>
                <ListItemText primary={name} />
              </ListItem>
            ))}
          </List>
        </form>
      </div>
    );
  }
}

export default GroceryList;
