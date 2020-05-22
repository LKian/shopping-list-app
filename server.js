const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();

// route: use this file and call it "groceries"
const groceries = require("./routes/api/groceries");

// middleware: making sure the server handles incoming requests through express middleware

//Enable CORS for all HTTP methods

app.use(express.json());
app.use(cors());
// info from keys
const db = require("./config/keys").mongoURI;

// restarted both.  It should be working, right?  Eveery tutorial I watched or read said to do this.  I even implemented corsOptions and a whitelist earlier.

//
//

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

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on Port: ${port}`));
