const express = require("express");

const mysql = require("mysql");
const cors = require("cors");
const bodyParser = require("body-parser");

const register = require("./controllers/register");
const signin = require("./controllers/signin");
const albumlist = require("./controllers/albumlist");
// const profile = require('./controllers/profile');

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "musicdb"
});

db.connect();

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

//Figure out what is db.useres in this contex
app.get("/", (req, res) => {
  // res.send(db.users);
  res.send("Hello");
});

app.post("/signin", signin.handleSignin(db));

app.post("/register", register.handleRegister(db));

app.post("/searchalb", albumlist.handleSearch(db));

app.listen(3000, () => {
  console.log("Application listening on port 3000!");
});
/*
    --> / res = this is working
    --> /signin --> POST = successful / fail
    --> /register --> POST = 

    */
