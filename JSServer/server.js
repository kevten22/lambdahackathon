//import express framework
const express = require("express");
const server = express();
//import helmet, morgan cors
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require('body-parser');
const collections = require("./routes/collections");
const users = require("./routes/users");

server.use(express.json());
server.use(helmet());
server.use(morgan("dev"));
server.use(cors({ origin: "http:localhost:3000", credentials: true }));
server.use("/collections", collections);
server.use("/users", users);
server.use(bodyParser.json());



server.listen(9000, () => console.log("api running..."));
