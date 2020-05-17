const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();

// middleware
app.use(bodyParser.json());

// info from keys
const db = require(".config/keys").mongoURI;
