const express = require("express");
const router = express.Router();
const employeeList = require('../data/employees.js');


router.get("/api/employees", function(req, res){
    res.json(employeeList)
});

router.post("/api/employees", function(req, res){
    res.send(req.body); //push object to req.body
});








module.exports = router;