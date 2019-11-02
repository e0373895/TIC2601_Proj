const express = require("express");
const app = express();
const mysql = require("mysql");
const bodyParser = require("body-parser");

app.use(bodyParser.json());

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "musicdb"
});

connection.connect();

connection.query("SELECT * FROM userdata", function(err, rows, fields) {
  if (!err) console.log(rows);
  else console.log(err);
});

connection.end();

// // // connect to database
// db.connect(err => {
//   if (err) {
//     throw err;
//   }
//   console.log("Connected to database");
// });

// app.get("/", (req, res) => {
//   res.send(database.users);
// });

// app.post("/signin", (req, res) => {
//   if (
//     req.body.email === database.users[0].email &&
//     req.body.password === database.users[0].password
//   ) {
//     res.json("success");
//   } else {
//     res.status(400).json("error logging in");
//   }
// });

// app.post("/register", (req, res) => {
//   const { email, name, password } = req.body;
//   database.users.push({
//     id: "125",
//     name: name,
//     email: email,
//     password: password,
//     entries: 0,
//     joined: new Date()
//   });
//   res.json(database.users[database.users.length - 1]);
// });

app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});

/*
    --> / res = this is working
    --> /signin --> POST = successful / fail
    --> /register --> POST = 

    */
