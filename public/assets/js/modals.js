
function gradeForm() {
    var id = $(this).attr("id");
    $(".idValue").attr("value", id);
}

function editForm() {

    var id = $(this).attr("data-id");
    var courseName = $(this).parent().parent().find(".courseName").text();
    var courseSemester = $(this).parent().parent().find(".displaySemester").text();;
    var courseYear = $(this).parent().parent().find(".displayYear").text();
    var courseCredits = $(this).parent().parent().find(".displayCredits").text();
    var gradeEntry = $(this).parent().parent().find(".gradeButton").text();

    if (gradeEntry === "") {
        gradeEntry = "N/A"
    }

    $(".idValue").attr("value", id);
	$("#modalCourseName").attr("placeholder", courseName);
    $("#modalCourseSemester").attr("placeholder", courseSemester);
    $("#modalGradeEntry").attr("placeholder", gradeEntry);
 	$("#modalCourseYear").attr("placeholder", courseYear);
    $("#modalCourseCredits").attr("placeholder", courseCredits);
    
}

$(document).on("click", ".gradeTrigger", gradeForm);

$(document).on("click", ".editCourse", editForm);