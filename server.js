const express = require('express');
const helmet = require('helmet');

const db = require('./data/dbconfig');

const server = express();

server.use(helmet());
server.use(express.json());

server.get('/', (req, res) => {
    res.send('<h2>Only two FILES lol I AM THE BOSS!</h2>')
})

//Getting the Information through the API
server.get('/api/projects', (req, res) => {
    db('projects')
        .then(projects => {
            res.status(200).json(projects);

        })
        .catch(error => {
            res.status(500).json(error);
    })
})

server.get('/api/resource', (req, res) => {
    db('resource')
    .then(resource => {
        res.status(200).json(resource)
    })
        .catch(error => {
            res.status(500).json(error); 
    })
})


server.get('/api/task', (req, res) => {
    db('task')
    .then(task => {
        res.status(200).json(task)
    })
        .catch(error => {
            res.status(500).json(error); 
    })
})

//Adding information to the database.

server.post('/api/projects', (req, res) => {
    db('projects').insert(req.body)
        .then(ids => {
            const id = ids[0];
            db('projects')
                .where({ id })
                .first()
                .then(project => {
                    res.status(201).json(project);
            })
            .catch(error => {
                res.status(500).json(error);
              });
        })
   
    
})

server.post('/api/resource', (req, res) => {
    db('resource').insert(req.body)
        .then(ids => {
            const id = ids[0];
            db('resource')
                .where({ id })
                .first()
                .then(resource => {
                    res.status(201).json(resource);
            })
            .catch(error => {
                res.status(500).json(error);
              });
        })
   
    
})

server.post('/api/task', (req, res) => {
    db('task').insert(req.body)
        .then(ids => {
            const id = ids[0];
            db('task')
                .where({ id })
                .first()
                .then(task => {
                    res.status(201).json(task);
            })
            .catch(error => {
                res.status(500).json(error);
              });
        })
   
    
})

module.exports = server;