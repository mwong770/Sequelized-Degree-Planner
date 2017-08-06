
var express = require("express");
var courses = require("../models/courses.js");
var db = require("../models");

var router = express.Router();

router.get("/", function(req, res) {

    // gets the sum of credits from each category
    function getSum(field) {
        return db.Courses.sum('credits', { where: { [field]: 1 } } ).then(function(data) {
            if (!data > 0) { data = 0 };
            return data;
        });
    }

    var plannedCredits;
    var currentCredits;
    var completedCredits;

    getSum("planned").then(function(data) {
        plannedCredits = data;
    });

    getSum("current").then(function(data) {
        currentCredits = data;
    });

    getSum("completed").then(function(data) {
        completedCredits = data;
    });

    // gets all data from db then renders index with data and credit sums 
    db.Courses.findAll({
                order: [['semester_code', 'ASC']] 
        }).then(function(data) {
        var courseData = {
            courses: data
        };
        res.render("index", {
            courses: data,
            plannedCredits: plannedCredits,
            currentCredits: currentCredits,
            completedCredits: completedCredits
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
    db.Courses.update(
        {
            completed: req.body.completed,
            current: req.body.current,
            planned: req.body.planned
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








