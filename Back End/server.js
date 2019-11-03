const express = require("express");

const mysql = require("mysql");
const cors = require("cors");
const bodyParser = require("body-parser");

const register = require("./controllers/register");
const signin = require("./controllers/signin");
// const profile = require('./controllers/profile');

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "musicdb"
});

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Figure out what is db.useres in this contex
app.get("/", (req, res) => {
  // res.send(db.users);
  res.send("Hello");
});

app.post("/signin", signin.handleSignin(db));

app.post("/register", register.handlRegister(db));

app.listen(3000, () => {
  console.log("Application listening on port 3000!");
});

/*
    --> / res = this is working
    --> /signin --> POST = successful / fail
    --> /register --> POST = 

    */
