// Imports express into our app and sets it up for use
// including the path package to get the correct file path for our html
const express = require('express');
const path = require('path');

const app = express();

// Defines a PORT for the server to listen for requests
const PORT = process.env.PORT || 8080;

// Sets our server to use the public directory for static assets
app.use(express.static("app/public"));

// Sets up our server to parse our request body for usage
app.use(express.urlencoded({extend:false}))
app.use(express.json())

//Routes
const htmlRoutes = require("./app/routing/htmlRoutes.js");
const apiRoutes = require("./app/routing/apiRoutes.js");

app.use('/api',apiRoutes);
app.use('/',htmlRoutes);


// Starts our server on the predefined PORT
app.listen(PORT, function(){
  console.log(`App is now listening on PORT ${PORT}`)
});