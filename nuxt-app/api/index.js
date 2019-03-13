const express = require('express');

// Create express instnace
const app = express();

// Body parser
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// Set Middleware
const logApiCalls = require('./middleware/log-api-calls');
app.use(logApiCalls);

// Require API routes
const projector = require('./routes/projector');
const experience = require('./routes/experience');

// Import API Routes
app.use(projector);
app.use(experience);

// Export the server middleware
module.exports = {
  path: '/api',
  handler: app,
};
