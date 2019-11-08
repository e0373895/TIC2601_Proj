const express = require("express");

const mysql = require("mysql");
const cors = require("cors");
const bodyParser = require("body-parser");
const multer = require("multer");
const fs = require("fs");
const fileUpload = require("express-fileupload");

const register = require("./controllers/register");
const signin = require("./controllers/signin");
const albumlist = require("./controllers/albumlist");
const fileupload = require("./controllers/fileupload");
const userprofile = require("./controllers/userprofile");
const albumdetails = require("./controllers/albumdetails");
// const uploadfiledetails = require("./controllers/uploadfiledetails");
// const profile = require('./controllers/profile');

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "a0193936N",  
  database: "musicdb"    
});

db.connect();

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(fileUpload());
//Figure out what is db.useres in this contex
app.get("/", (req, res) => {
  // res.send(db.users);
  res.send("Hello");
});

app.post("/signin", signin.handleSignin(db));

app.post("/register", register.handleRegister(db));

app.post("/searchalb", albumlist.handleSearch(db));

app.post("/upload", fileupload.handleFileupload(db, fs));

app.post("/userProfile", userprofile.handleProfie(db));

app.post("/searchalbdetails", albumdetails.handleAlbumdetails(db));

app.listen(3000, () => {
  console.log("Application listening on port 3000!");
});
/*
    --> / res = this is working
    --> /signin --> POST = successful / fail
    --> /register --> POST = 

    */
