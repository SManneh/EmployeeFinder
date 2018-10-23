const express = require("express");
const path = require("path");
const router = express.Router();






router.get("/survey", function(req, res){
    res.sendFile(path.join(__dirname , "/../public/survey.html"));
})
router.get("/", function(req, res){
    res.sendFile();
})

module.exports = router;