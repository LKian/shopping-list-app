import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import DeleteIcon from "@material-ui/icons/Delete";

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
        <form id="grocery-list-form" onSubmit={this.addItem}>
          <div className="form-container">
            <input
              type="text"
              placeholder="Add a grocery item"
              value={this.state.groceryItem}
              onChange={this.handleChange}
            />
          </div>
          <List component="ul" aria-label="main-shopping-list">
            {/* <ListItem button> */}
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
