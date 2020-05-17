const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

// use this file and set it equal to "groceries"
const groceries = require("./routes/api/groceries");

const app = express();

// middleware:  making sure the server handles incoming requests through express middleware
app.use(bodyParser.json());

// info from keys
const db = require("./config/keys").mongoURI;

// connect to mongoDB
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB is connected."))
  .catch((err) => console.log(err));

// add a middleware layer to the specified path i.e. "/groceries"
// app.use mounts the path on "/groceries" to "routes/api/groceries.js"
app.use("/groceries", groceries);

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server started on Port: ${port}`));
