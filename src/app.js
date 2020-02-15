const express = require('express');
const app = express();
const cors = require('cors');
const middlewares = require('./middlewares');
const controllers = require('./controllers');

const { densityAnalyzerRoute, nonLexicalWordsRoute } = require('./routes')(controllers, middlewares);

// Enable CORS
app.use(cors());

// Parse request body to json
app.use(express.json());

// Middlewares
app.use(middlewares.timeLogger);
app.use(middlewares.requestLogger);

// Routes
app.use(densityAnalyzerRoute);
app.use(nonLexicalWordsRoute);

module.exports = app;