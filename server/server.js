const express = require('express');
const path = require('path');
const routes = require('./routes');
const crucibleDB = require("./models");
let session = require("express-session"); //Imports express session package
let passport = require("./config/passport"); //Imports the passport script
const PORT = process.env.PORT || 8080;
require("dotenv").config();
const app = express();

// Priority serve any static files.
app.use(express.static(path.resolve(__dirname, 'client/build')));
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));//creates a login session and stores the state in a cookie
app.use(passport.initialize());
app.use(passport.session());
//app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// All remaining requests return the React app, so it can handle routing.
app.use(routes);

// app.get('*', function(request, response) {
//   response.sendFile(path.resolve(__dirname, 'client/build', 'index.html'));
// });

crucibleDB.sequelize.sync().then(function() {
  app.listen(PORT, function () {
    console.error(`Node listening on port ${PORT}`);
  });
}).catch((err) => {
  console.log(err);
});
