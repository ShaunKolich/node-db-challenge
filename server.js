const express = require('express');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
    res.send('<h2>Only two FILES lol I AM THE BOSS!</h2>')
})

module.exports = server;