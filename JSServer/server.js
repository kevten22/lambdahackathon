//import express framework
const express = require("express");
const server = express();
//import helmet, morgan cors
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require('body-parser');
const collections = require("./routes/collections");

server.use(express.json());
server.use(helmet());
server.use(morgan("dev"));
server.use(cors({ origin: "http:localhost:3000", credentials: true }));
server.use("/collections", collections);
server.use(bodyParser.json());

server.get('/users', async (req, res) => {
    try {
        
    } catch (err) {

    }
});

server.get('/users/:id', async (req, res) => {
    try {
        
    } catch (err) {

    }
});

server.get('/users/:id/collections' , async (req, res) => {
    try {
        
    } catch (err) {

    }
});

server.get('/collections', async (req, res) => {
    try {
        
    } catch (err) {

    }
});

server.get('/images', async (req, res) => {
    try {
        
    } catch (err) {

    }
});

server.get('/images/:id', async (req, res) => {
    try {
        
    } catch (err) {

    }
});


serve.post('/users', async (req, res) => {
    try {
        
    } catch (err) {

    }
});

serve.post('/users/:id', async (req, res) => {
    try {
        
    } catch (err) {

    }
});

serve.post('/users/:id/collections' , async (req, res) => {
    try {
        
    } catch (err) {

    }
});

serve.post('/collections', async (req, res) => {
    try {
        
    } catch (err) {

    }
});

serve.post('/images', async (req, res) => {
    try {
        
    } catch (err) {

    }
});

serve.post('/images/:id', async (req, res) => {
    try {
        
    } catch (err) {

    }
});

server.put('/users', async (req, res) => {
    try {
        
    } catch (err) {

    }
});

server.put('/users/:id', async (req, res) => {
    try {
        
    } catch (err) {

    }
});

server.put('/users/:id/collections' , async (req, res) => {
    try {
        
    } catch (err) {

    }
});

server.put('/collections', async (req, res) => {
    try {
        
    } catch (err) {

    }
});

server.put('/images', async (req, res) => {
    try {
        
    } catch (err) {

    }
});

server.put('/images/:id', async (req, res) => {
    try {
        
    } catch (err) {

    }
});
//
server.delete('/users', async (req, res) => {
    try {
        
    } catch (err) {

    }
});

server.delete('/users/:id', async (req, res) => {
    try {
        
    } catch (err) {

    }
});

server.delete('/users/:id/collections' , async (req, res) => {
    try {
        
    } catch (err) {

    }
});

server.delete('/collections', async (req, res) => {
    try {
        
    } catch (err) {

    }
});

server.delete('/images', async (req, res) => {
    try {
        
    } catch (err) {

    }
});

server.delete('/images/:id', async (req, res) => {
    try {
        
    } catch (err) {

    }
});






server.listen(9000, () => console.log("api running..."));
