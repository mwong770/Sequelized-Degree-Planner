
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
    var gradeEntry = $(this).parent().parent().find("#gradeButton").text();

    if (gradeEntry === "") {
        gradeEntry = "N/A"
    }

    $(".idValue").attr("value", id);
	$("#courseName2").attr("placeholder", courseName);
    $("#courseSemester2").attr("placeholder", courseSemester);
    $("#gradeEntry2").attr("placeholder", gradeEntry);
 	$("#courseYear2").attr("placeholder", courseYear);
    $("#courseCredits2").attr("placeholder", courseCredits);
    
}

$(document).on("click", ".gradeTrigger", gradeForm);

$(document).on("click", ".editCourse", editForm);