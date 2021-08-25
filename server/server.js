require("dotenv").config();
const express = require("express");
const bcrypt = require("bcrypt");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors({ origin: "http://localhost:3000", credentials: true}));

// Database setup
const DATABASE = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

app.get("/", (req, res) => {
  console.log("GET -> hello world");
  res.send({ message: "hello world" });
});

app.post("/login", (req, res) => {
  console.log("GET -> login");
  const { username, password } = req.body;

  DATABASE.query("SELECT * FROM users WHERE username = ?;", [username], (error, result) => {
    if (error) {
      return res.status(500).send({error: error});
    }
    if (result.length > 0) {
      const user = result[0];
      bcrypt.compare(password, user.password).then((match) => {
        if (match) {
          return res.status(200).send({message: "login -> passwords match", user: user});
        } else {
          return res.status(401).send({message: "login -> passwords do not match"});
        }
      }).catch((error) => {
        return res.status(500).send({error: error});
      });
    } else {
      return res.status(401).send({message: `login -> no results found for username ${username}`});
    }
  });
});

app.post("/signup", (req, res) => {
  console.log("GET -> signup");
  const { username, password } = req.body;

  bcrypt.hash(password, parseInt(process.env.SALT_ROUNDS)).then((hash) => {
    DATABASE.query("INSERT INTO users (username, password) VALUES (?, ?);", [username, hash], (error, result) => {
      if (error) {
        return res.status(500).send({error: error});
      }
      return res.status(200).send({message: "signup -> user registered"});
    });
  }).catch((error) => {
    return res.status(500).send({error: error});
  });
});

app.get("/projects", (req, res) => {
  console.log("GET -> projects");

  DATABASE.query("SELECT * FROM projects;", [], (error, result) => {
    if (error) {
      return res.status(500).send({ error: error })
    }
    if (result.length > 0) {
      return res.status(200).send({ message: `projects -> ${result.length} projects found`, projects: result});
    } else {
      return res.status(400).send({ message: "projects -> no projects found" });
    }
  });
});

app.get("/projects/:id", (req, res) => {
  console.log("GET -> projects/:id");
  const { id } = req.params;

  DATABASE.query("SELECT * FROM projects WHERE project_id = ?;", [id], (error, result) => {
    if (error) {
      return res.status(500).send({ error: error })
    }
    if (result.length > 0) {
      return res.status(200).send({ message: `projects -> project found with id: ${id}`, project: result});
    } else {
      return res.status(400).send({ message: `projects -> no project found with id: ${id}` });
    }
  });
});

app.post("/projects", (req, res) => {
  console.log("POST -> projects");
  const { name, owner_id } = req.body;

  DATABASE.query("INSERT INTO projects (name, owner_id) VALUES (?, ?);", [name, owner_id], (error, result) => {
    if (error) {
      return res.status(500).send({ error: error })
    }
    return res.status(200).send({ message: `projects -> project created` });
  });
});

app.put("/projects/:id", (req, res) => {
  console.log("PUT -> projects/:id");
  const { id } = req.params;
  const { name } = req.body;

  DATABASE.query("UPDATE projects SET name = ?, update_time = NOW() WHERE project_id = ?;", [name, id], (error, result) => {
    if (error) {
      return res.status(500).send({ error: error })
    }
    return res.status(200).send({ message: `projects -> project updated` });
  });
});

app.delete("/projects/:id", (req, res) => {
  console.log("DELETE -> projects/:id");
  const { id } = req.params;

  DATABASE.query("DELETE FROM projects WHERE project_id = ?;", [id], (error, result) => {
    if (error) {
      return res.status(500).send({ error: error })
    }
    return res.status(200).send({ message: `projects -> project deleted` });
  });
});

app.get("/users", (req, res) => {
  console.log("GET -> users");

  DATABASE.query("SELECT * FROM users;", [], (error, result) => {
    if (error) {
      return res.status(500).send({ error: error })
    }
    if (result.length > 0) {
      return res.status(200).send({ message: `users -> ${result.length} users found`, users: result});
    } else {
      return res.status(400).send({ message: "users -> no users found" });
    }
  });
});

app.post("/users", (req, res) => {
  console.log("POST -> users");
  const { username, password } = req.body;

  DATABASE.query("INSERT INTO users (username, password) VALUES (?, ?);", [username, password], (error, result) => {
    if (error) {
      return res.status(500).send({ error: error })
    }
    return res.status(200).send({ message: `users -> user created` });
  });
});

app.get("/users/:id", (req, res) => {
  console.log("GET -> users/:id");
  const { id } = req.params;

  DATABASE.query("SELECT * FROM users WHERE user_id = ?;", [id], (error, result) => {
    if (error) {
      return res.status(500).send({ error: error })
    }
    if (result.length > 0) {
      return res.status(200).send({ message: `users -> user found with id: ${id}`, user: result[0]});
    } else {
      return res.status(400).send({ message: `users -> no user found with id: ${id}` });
    }
  });
});

app.put("/users/:id", (req, res) => {
  console.log("PUT -> users/:id");
  const { id } = req.params;
  const { bio } = req.body;

  DATABASE.query("UPDATE users SET bio = ?, update_time = NOW() WHERE user_id = ?;", [bio, id], (error, result) => {
    if (error) {
      return res.status(500).send({ error: error })
    }
    return res.status(200).send({ message: `users -> user updated` });
  });
});

app.delete("/users/:id", (req, res) => {
  console.log("DELETE -> users/:id");
  const { id } = req.params;

  DATABASE.query("DELETE FROM users WHERE user_id = ?;", [id], (error, result) => {
    if (error) {
      return res.status(500).send({ error: error })
    }
    return res.status(200).send({ message: `users -> user deleted` });
  });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}.\n`)
});
