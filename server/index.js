require("dotenv").config();
const express = require("express");
const bcrypt = require("bcrypt");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json);
app.use(cors({ origin: "http://localhost:3000", credentials: true}));

// Database setup
const DATABASE = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

app.get("/", (req, res) => {
  console.log("hello world");
  res.send({ message: "hello world" });
})

app.get("/projects", (req, res) => {
  console.log("projects");

  DATABASE.query("SELECT * FROM projects;", [], (error, result) => {
    if (error) {
      return res.status(500).send({ error: error })
    }
    if (result.length > 0) {
      console.log("data: ", result[0]);
      return res.status(200).send({ message: "projects -> results found", data: result[0]});
    } else {
      return res.status(200).send({ message: "projects -> no results found" });
    }
  });

  res.send({ message: "projects" });
})

app.listen(port, () => {
  console.log(`Server listening on port ${port}.\n`)
})
