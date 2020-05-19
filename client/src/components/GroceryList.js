import React, { Component } from "react";

class GroceryList extends Component {
  state = {
    items: [
      { name: "Milk" },
      { name: "Eggs" },
      { name: "Lettuce" },
      { name: "Crackers" },
      { name: "Chicken" },
    ],
  };

  render() {
    const { items } = this.state;
    return (
      <div>
        <button
          onClick={() => {
            const name = prompt("Enter an Item");
          }}
        >
          Add an item
        </button>
      </div>
    );
  }
}

export default GroceryList;
