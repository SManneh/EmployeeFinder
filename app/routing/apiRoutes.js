const express = require("express");
const router = express.Router();
const employeeList = require('../data/employees.js');


router.get("/employees", function(req, res){
    res.json(employeeList)
});

router.post("/employees", async function(req, res){
    
    const newEmployee = req.body;
    const bestMatch = await findBestMatch(newEmployee);
    employeeList.push(newEmployee);
    res.send(bestMatch); //push object to req.body
});


function findBestMatch(newEmployee) {
    let lowestDifference = null;
    let bestMatch = null;
    employeeList.forEach( employee => {
        let totalDifference = 0;
            employee.scores.forEach((score, index )=>{
                let scoreDifference = score - newEmployee.scores[index];
                totalDifference += Math.abs(scoreDifference);
            })

            if(lowestDifference == null || totalDifference < lowestDifference ){
                lowestDifference = totalDifference;
                bestMatch = employee;
            }
    
    });


    return bestMatch;


}








module.exports = router;