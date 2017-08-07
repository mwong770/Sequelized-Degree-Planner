
function gradeForm() {
    var id = $(this).attr("id");
    $(".idValue").attr("value", id);
}

$(document).on("click", ".gradeTrigger", gradeForm);