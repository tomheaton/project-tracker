import dotenv from "dotenv";
import express from "express";
dotenv.config();
const app = express();
const port = 5000 || process.env.PORT;

app.get("/", (req, res) => {
    res.send({ message: "hello world" });
});

app.listen( port, () => {
    console.log(`Server started at http://localhost:${port}`);
});