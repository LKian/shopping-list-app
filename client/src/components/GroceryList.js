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
    groceryItemDB: "",

    groceryListDB: [],
  };

  getAllItemsFromDB = () => {
    return axios
      .get("http://localhost:5000/groceries/")
      .then((res) => {
        console.log("this is getallItems RES: ", res.data);
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
        this.setState((prevState) => ({
          groceryItemDB: "",
          groceryListDB: [...this.state.groceryListDB, res.data],
        }));
      })
      .catch((e) =>
        this.setState({ error: "People who use grocery lists are no fun" })
      );
  };

  deleteItem = (e, id) => {
    this.setState({
      // groceryItemDB: e.target.value,
      groceryListDB: this.state.groceryListDB.filter(
        (currentGroceryItem) => currentGroceryItem._id !== id
      ),
    });
    axios.delete(`http://localhost:5000/groceries/${id}`).then((res) => {
      // console.log("iddddd ", id);
    });
  };

  render() {
    const { groceryList, groceryListDB } = this.state;

    const databaseItems = groceryListDB.map((databaseItem, key) => (
      <ListItem key={databaseItem._id}>
        <ListItemIcon className="icon-container">
          <DeleteIcon
            className="icon-delete"
            id={databaseItem.id}
            onClick={(e) => this.deleteItem(e, databaseItem._id)}
          />
        </ListItemIcon>
        <ListItemText primary={databaseItem.name} />
        <ListItemText primary={databaseItem._id} />
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
