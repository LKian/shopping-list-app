import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import DeleteIcon from "@material-ui/icons/Delete";

class GroceryList extends Component {
  state = {
    items: [
      { name: "Milk", id: "Milk1" },
      { name: "Eggs", id: "Eggs1" },
      { name: "Lettuce", id: "Lettuce1" },
      { name: "Crackers", id: "Crackers1" },
      { name: "Chicken", id: "Chicken1" },
    ],
  };

  render() {
    const { items } = this.state;
    return (
      <div>
        <Button
          color="primary"
          variant="contained"
          onClick={() => {
            const name = prompt("Enter an Item");
            if (name) {
              this.setState((state) => ({
                items: [...state.items, { name }],
              }));
            }
          }}
        >
          Add an item
        </Button>
        <List component="nav" aria-label="main-shopping-list">
          <ListItem button>
            {items.map(({ name }) => (
              <ListItem>
                <ListItemIcon>
                  <DeleteIcon
                    onClick={() => {
                      this.setState((state) => ({
                        items: state.items.filter((item) => item.name !== name),
                      }));
                    }}
                  />
                </ListItemIcon>
                <ListItemText primary={name} />
              </ListItem>
            ))}
          </ListItem>
        </List>
      </div>
    );
  }
}

export default GroceryList;
