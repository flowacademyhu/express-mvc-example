const express = require('express');
const videogames = express();
const models = require('../models');

// index
videogames.get('/', (req, res) => {
  models.Videogame.findall().then(videogames => {
    res.json(videogames);
  });
});

// show
videogames.get('/:id', (req, res) => {
  models.Videogame.findById(req.params.id).then(videogame => {
    res.json(videogame);
  });
});
module.exports = videogames;
