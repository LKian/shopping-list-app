const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();

app.use(cors());
var whitelist = [
  "http://localhost:5000",
  "http://localhost:5000/",
  "http://localhost:3000/",
  "http://localhost:3000",
];

// route: use this file and call it "groceries"
const groceries = require("./routes/api/groceries");

var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("ERROR FROM CORSOPTONS"));
    }
  },
};
// middleware: making sure the server handles incoming requests through express middleware

//Enable CORS for all HTTP methods

app.use(express.json());

app.use(cors(corsOptions));

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

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on Port: ${port}`));
