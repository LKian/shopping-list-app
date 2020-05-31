import React, { Component } from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import TextField from "@material-ui/core/TextField";
import { Delete, Add, Receipt } from "@material-ui/icons";
import Paper from "@material-ui/core/Paper";

import { Helmet } from "react-helmet";
var axios = require("axios");

class GroceryList extends Component {
  state = {
    groceryItemName: "",
    groceryItemQuantity: "",
    groceryListDB: [],
  };

  handleChangeDB = async (e) => {
    await this.setState({
      [e.target.name]: e.target.value,
    });
    await console.log(this.state);
  };

  getAllItemsFromDB = () => {
    try {
      return axios
        .get("http://localhost:5000/groceries/")
        .then((res) => {
          const groceryListDB = res.data;

          this.setState({ groceryListDB: groceryListDB });
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("handle submit: ", this.state);
    const groceryItemName = {
      name: this.state.groceryItemName,
      quantity: this.state.groceryItemQuantity,
      id: new Date(),
    };

    console.log("grocery item name", groceryItemName);

    axios
      .post("http://localhost:5000/groceries", groceryItemName)
      .then((res) => {
        if (res.status === 200) {
          console.log("You added: ", res.data.name, res.data.quantity);
          this.setState((prevState) => ({
            groceryItemName: "",
            groceryItemQuantity: "",
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
    const { groceryListDB } = this.state;

    const databaseItems = groceryListDB.map((databaseItem, index) => (
      <ListItem dense={true} key={databaseItem._id}>
        <ListItemIcon className="grocery-item-delete">
          <Delete
            className="icon-delete"
            id={databaseItem._id}
            onClick={(e) => this.deleteItem(databaseItem._id)}
          />
        </ListItemIcon>
        <ListItemText
          className="grocery-item-quantity"
          primary={databaseItem.quantity}
        />
        <ListItemText
          className="grocery-item-name"
          primary={databaseItem.name}
        />
      </ListItem>
    ));

    return (
      <GroceryListContainer className="section">
        <Helmet>
          <title>Groceries</title>
        </Helmet>
        <form id="grocery-list-db-form" onSubmit={this.handleSubmit}>
          <TextField
            id="grocery-item-name"
            name="groceryItemName"
            label="Name"
            value={this.state.groceryItemName}
            onChange={this.handleChangeDB}
            variant="outlined"
          />
          <TextField
            id="grocery-item-qty"
            name="groceryItemQuantity"
            label="Quantity"
            value={this.state.groceryItemQuantity}
            onChange={this.handleChangeDB}
            variant="outlined"
          />
          <Button
            className="button-add-to-cart"
            // style={{ display: "none" }}
            type={"submit"}
          >
            {" "}
            <Add className="grocery-item-add" />
          </Button>
        </form>
        <Button
          className="button-view-grocery-items"
          onClick={this.getAllItemsFromDB}
        >
          See shopping list
          <Receipt className="grocery-item-receipt" />
        </Button>
        {databaseItems.length ? (
          <Paper className="grocery-list" elevation={2}>
            {databaseItems}
          </Paper>
        ) : null}
      </GroceryListContainer>
    );
  }
}

const GroceryListContainer = styled.div`
  #grocery-list-db-form {
    background-color: var(--primaryLight);
    display: flex;
    justify-content: center;
    padding: 25px 0;
  }
  .MuiFormControl-root.MuiTextField-root:nth-child(2) {
    max-width: 100px;
  }
  .grocery-item-delete {
    color: var(--primaryRed);
  }
  .grocery-item-add {
    color: var(--primaryDark);
  }
  .grocery-list {
    width: 50%;
    padding: 25px;
    margin: auto;
  }
  .grocery-item-quantity {
    min-width: 40px;
  }
  #grocery-list-db-form .MuiOutlinedInput-root #grocery-item-name,
  #grocery-list-db-form .MuiOutlinedInput-root #grocery-item-qty {
    background-color: var(--primaryWhite);
    border: 1px solid var(--primaryLight);
  }
  .MuiListItemText-root {
    flex: 0 1 auto;
  }
  .MuiTypography-body2 {
    font-family: "Indie Flower", cursive;
    font-size: 1.5rem;
  }
  .button-view-grocery-items {
    display: flex;
    margin: 25px auto;
  }
`;

export default GroceryList;
