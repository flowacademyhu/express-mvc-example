const express = require('express');
const app = express();
const clocks = require('./controllers/clocks');
const videogames = require('./controllers/videogames');

app.use('/clocks', clocks);
app.use('/videogames', videogames);

app.listen(process.env.PORT);
