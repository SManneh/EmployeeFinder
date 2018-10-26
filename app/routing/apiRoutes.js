// Imports express into our app and sets it up for use
const express = require("express");
const router = express.Router();
const employeeList = require('../data/employees.js');

// when a request is made, it responds with all the employeeLists
router.get("/employees", function(req, res){
    res.json(employeeList)
});
// when a new survey has been taken, adds new data to the employeeLists
// async is a javascript promise that waits until the promise is completed to return its value
// req.body is assigned to the newEmployee variable
// newEmployee is pushed into the employeeList array
//
router.post("/employees", async function(req, res){
    
    const newEmployee = req.body;
    const bestMatch = await findBestMatch(newEmployee);
    employeeList.push(newEmployee);
    res.send(bestMatch); 
});

// function to get the best match of the new employee
function findBestMatch(newEmployee) {
    let lowestDifference = null;
    let bestMatch = null;
    // loop through all of the employees
    employeeList.forEach( employee => {
        let totalDifference = 0;
        // looping through all of the scores of the employee, we are subtracting each score from 
        // each scores of the new employees, then we are adding the scores difference to the total difference.
        // using math.abs to return the absolute value of a number, no negative numbers
            employee.scores.forEach((score, index )=>{
                let scoreDifference = score - newEmployee.scores[index];
                totalDifference += Math.abs(scoreDifference);
            })
            // if statement is used here to return the best match of the new employee if the below conditions are met
            if(lowestDifference == null || totalDifference < lowestDifference ){
                lowestDifference = totalDifference;
                bestMatch = employee;
            }
    
    });


    return bestMatch;


}








module.exports = router;