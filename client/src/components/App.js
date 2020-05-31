import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import Posts from "./Posts";
import GroceryList from "./GroceryList";
import TextComponent from "./TextComponent";
import ContactForm from "./ContactForm";
import "../App.css";

function App() {
  return (
    <div>
      <div className="App">
        <Router>
          <Header />
          <Route exact path="/" component={Home} />
          <Route path="/groceries" component={GroceryList} />
          <Route path="/posts" component={Posts} />
          <Route path="/text" component={TextComponent} />
          <Route path="/contact" component={ContactForm} />
          <Footer />
        </Router>
      </div>
    </div>
  );
}

export default App;
