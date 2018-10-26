// Imports express into our app and sets it up for use
// including the path package to get the correct file path for our html
const express = require("express");
const path = require("path");
const router = express.Router();





 // The code handles when users 'visit' a page and the user is shown an HTML page of content
router.get("/survey", function(req, res){
    res.sendFile(path.join(__dirname , "/../public/survey.html"));
})
router.get("/", function(req, res){
    res.sendFile(path.join(__dirname , "../public/home.html"));
})

module.exports = router;