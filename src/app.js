const express = require('express');
const app = express();
const cors = require('cors');
const middlewares = require('./middlewares');

// Enable CORS
app.use(cors());

// Parse request body to json
app.use(express.json());

// Middlewares
app.use(middlewares.timeLogger);
app.use(middlewares.requestLogger);

module.exports = app;