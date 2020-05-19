import React from "react";
import Header from "./Header";
import Posts from "./Posts";
import "../App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <h2>Front and back end run!</h2>
      <Posts />
    </div>
  );
}

export default App;
