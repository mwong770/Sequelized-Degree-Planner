
var express = require("express");
var courses = require("../models/courses.js");
var db = require("../models");

var router = express.Router();

router.get("/", function(req, res) {
    db.Courses.findAll({}).then(function(data) {
        var courseData = {
            courses: data
        };
        res.render("index", courseData);
    });
});

router.post("/", function(req, res) {
    if (req.body.semester.toLowerCase() === "spring") {
        var semesterCode = 1;
    }
    else if (req.body.semester.toLowerCase() === "fall") {
        var semesterCode = 3;
    }
    else if (req.body.semester.toLowerCase() === "summer") {
        var semesterCode = 2;
    }
    //'return' here so doesn't run code that follows after rendering 400
    else {
        res.render("400");
        return;
    };
    var semester = req.body.year + semesterCode;
    if(req.body.name !== "") {
        db.Courses.create({
            course_name: req.body.name,
            semester: semester
          }).then(function() {
            res.redirect("/");
          }).catch(function(err) {
            console.log("caught ya");
            res.render("400");
        });
    };
});

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








