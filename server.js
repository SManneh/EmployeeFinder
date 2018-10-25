// Imports express into our app and sets it up for use
const express = require('express');
const path = require('path');

const app = express();

// Defines a PORT for the server to listen for requests
const PORT = process.env.PORT || 8080;

app.use(express.static("app/public"));
app.use(express.urlencoded({extend:false}))
app.use(express.json())

const htmlRoutes = require("./app/routing/htmlRoutes.js");
const apiRoutes = require("./app/routing/apiRoutes.js");

app.use('/api',apiRoutes);
app.use('/',htmlRoutes);


// Starts our server on the predefined PORT
app.listen(PORT, function(){
  console.log(`App is now listening on PORT ${PORT}`)
});