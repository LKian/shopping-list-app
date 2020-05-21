import React from "react";
import Header from "./Header";
import Text from "./Text";
import Posts from "./Posts";
import GroceryList from "./GroceryList";
import "../App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="section">
        <GroceryList />
        <Text />
      </div>
      <Posts />
    </div>
  );
}

export default App;
