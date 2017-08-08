
var express = require("express");
var courses = require("../models/courses.js");
var db = require("../models");

var router = express.Router();

var semesterValue;
var semesterCode;

function getSemesterCode(semester, year, res) {
    if (semester === "Spring") {
        semesterValue = 1;
    }
    else if (semester === "Fall") {
        semesterValue = 3;
    }
    else if (semester === "Summer") {
        semesterValue = 2;
    }
    else {
        res.render("400");
    };

    semesterCode = year + semesterValue;
}

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

    // assigns N/A to grade if grade empty on form
    // sends " " to db otherwise, which is not seen as empty
    if (req.body.grade !== "") {
         
        var grade = req.body.grade;
        // capitalizes first letter of grade
        grade = grade.charAt(0).toUpperCase() + grade.slice(1);

    } else 
        var grade = "N/A";

    getSemesterCode(req.body.semester, req.body.year, res);
    
    if (req.body.name !== "") {
        db.Courses.create({
            semester: req.body.semester,
            year: req.body.year,
            course_name: req.body.name,
            semester_code: semesterCode,
            credits: req.body.credits,
            status: req.body.status, 
            grade: grade
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

// changes course grade in db 
router.put("/grade", function(req, res) {
    var grade = req.body.grade;
    grade = grade.charAt(0).toUpperCase() + grade.slice(1);
    db.Courses.update(
        {
            grade: grade,
            status: "completed"
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

router.put("/newgrade", function(req, res) {
    var grade = req.body.grade;
    grade = grade.charAt(0).toUpperCase() + grade.slice(1);
    db.Courses.update(
        {
            grade: grade
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

// changes course name in db 
router.put("/name", function(req, res) {
    db.Courses.update(
        {
            course_name: req.body.name
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

// changes course credits in db 
router.put("/credits", function(req, res) {
    db.Courses.update(
        {
            credits: req.body.credits
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

// changes course semester and year in db 
router.put("/semester", function(req, res) {

    var semester = req.body.semester;
    var year = req.body.year;

    getSemesterCode(semester, year, res);

    db.Courses.update(
        {
            semester: semester,
            year: req.body.year,
            semester_code: semesterCode,
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








