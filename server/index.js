require("dotenv").config();
const express = require("express");
const bcrypt = require("bcrypt");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json);
app.use(cors({ origin: "http://localhost:3000", credentials: true}));

const DATABASE = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}.\n`)
})
