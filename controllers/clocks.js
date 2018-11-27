const express = require('express');
const clocks = express();
const models = require('../models');

// index
clocks.get('/', (req, res) => {
  models.Clock.findall().then(clocks => {
    res.json(clocks);
  });
});

// show
clocks.get('/:id', (req, res) => {
  models.Clock.findById(req.params.id).then(clock => {
    res.json(clock);
  });
});
module.exports = clocks;
