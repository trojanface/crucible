const express = require('express');
const path = require('path');
const routes = require('./routes');
const crucibleDB = require("./models");
const PORT = process.env.PORT || 8080;
require("dotenv").config();
const app = express();

// Priority serve any static files.
app.use(express.static(path.resolve(__dirname, 'client/build')));

// All remaining requests return the React app, so it can handle routing.
app.use(routes);

// app.get('*', function(request, response) {
//   response.sendFile(path.resolve(__dirname, 'client/build', 'index.html'));
// });

app.listen(PORT, function () {
  console.error(`Node listening on port ${PORT}`);
});