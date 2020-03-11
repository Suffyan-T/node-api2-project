const express = require("express");

const hubsRouter = require("../hubs/router");

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
  const query = req.query;

  console.log("query", query);

  res.status(200).json(query);
  res.send('Hello from Express');
});


server.use("/api/posts", hubsRouter);

module.exports = server;
