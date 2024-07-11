const express = require('express');
const cors = require('cors');
const colorsController = require('./controllers/colorsController');

const app = express();

app.use(express.json());
app.use(cors());
app.use('/colors', colorsController);

app.get('/', (req, res) => {
    res.send('Welcome to the Colors App!');
});

app.get('*', (req, res) => {
    res.status(404).send("Page not found");
});

module.exports = app;