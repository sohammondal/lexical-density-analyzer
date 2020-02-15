const express = require('express');
const app = express();
const cors = require('cors');

// Enable CORS
app.use(cors());

// Parse request body to json
app.use(express.json());


module.exports = app;