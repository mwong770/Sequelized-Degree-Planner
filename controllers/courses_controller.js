
var express = require("express");
var courses = require("../models/courses.js");
var db = require("../models");

var router = express.Router();

router.get("/", function(req, res) {
    db.Courses.findAll({
            // orders data asc by semester
            order: [["semester_code", "ASC"]]
        }).then(function(data) {

            // puts data in arrays by status
            var plannedArray = [];
            var currentArray = [];
            var completedArray = [];
            for (var i = 0; i < data.length; i++) { 
                if (data[i].status === "planned") {
                    plannedArray.push(data[i]);
                }
                if (data[i].status === "current") {
                    currentArray.push(data[i]);
                }
                if (data[i].status === "completed") {
                    completedArray.push(data[i]);
                }
            }
            // puts sum of each status in variables
            var plannedSum = 0;
            var currentSum = 0;
            var completedSum = 0;
            for (var i = 0; i < plannedArray.length; i++) {
                plannedSum += plannedArray[i].credits;
            }
            for (var i = 0; i < currentArray.length; i++) {
                currentSum += currentArray[i].credits;
            }
            for (var i = 0; i < completedArray.length; i++) {
                completedSum += completedArray[i].credits;
            }
        var courseData = {
            courses: data
        };
        // renders index with status arrays and status sums
        res.render("index", {
            planned: plannedArray,
            current: currentArray,
            completed: completedArray,
            plannedSum: plannedSum,
            currentSum: currentSum,
            completedSum: completedSum
        });
    });
});

// posts user inputs to db
router.post("/", function(req, res) {
    
    var semester = req.body.semester;

    // capitalizes first letter of the semester 
    semester = semester.charAt(0).toUpperCase() + semester.slice(1);

    if (req.body.semester.toLowerCase() === "spring") {
        var semesterValue = 1;
    }
    else if (req.body.semester.toLowerCase() === "fall") {
        var semesterValue = 3;
    }
    else if (req.body.semester.toLowerCase() === "summer") {
        var semesterValue = 2;
    }
    //'return' here so doesn't run code that follows after rendering 400
    else {
        res.render("400");
        return;
    };
    var semesterCode = req.body.year + semesterValue;
    if (req.body.name !== "") {
        db.Courses.create({
            semester: semester,
            year: req.body.year,
            course_name: req.body.name,
            semester_code: semesterCode,
            credits: req.body.credits
          }).then(function() {
            res.redirect("/");
          }).catch(function(err) {
            res.render("400");
        });
    };
});

// changes course category in db 
router.put("/status", function(req, res) {
    console.log("req.body.status");
    console.log(req.body.status);
    db.Courses.update(
        {
            status: req.body.status
        }, 
        { 
            where: 
                {
                    id: req.body.id
                }
        }
    ).then(function () {
        res.redirect("/");
    });
});

// deletes a course from the db
router.delete("/delete", function(req, res) {
    db.Courses.destroy({
      where: {
        id: req.body.id
      }
    }).then(function() {
          res.redirect("/");
    });
});

module.exports = router;








