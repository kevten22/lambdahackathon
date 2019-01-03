//import express framework
const express = require("express");
const server = express();
//import helmet, morgan cors
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");
server.use(express.json());
server.use(helmet());
server.use(morgan("dev"));
server.use(cors({ origin: "http:localhost:3000", credentials: true }));

server.get("/", (req, res) => {
  res.send("<h1>server running</h1>");
});

server.listen(9000, () => console.log("api running..."));
