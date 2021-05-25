// Define global variables
var hourEl = $(".hour");
var time = moment();
var saveBtn = $(".saveBtn");

function planner() {

    // Set the planner date to the current date
    $("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));

    // retrieve the tasks from local storage
    $(".time-block").each(function () {
        var id = $(this).attr("id");
        var schedule = localStorage.getItem(id);

        $(this).children(".schedule").val(schedule);
    });
}

//  calling the function planner to set the current date
planner();

// click event to save the tasks to local storage
saveBtn.on("click", function () {
    var time = $(this).parent().attr("id");
    var schedule = $(this).siblings(".schedule").val();

    // save the tasks for specific hour to local storage
    localStorage.setItem(time, schedule);
});

function pastPresentFuture() {
    hour = time.hours();
    $(".time-block").each(function () {
        // parse current time to compare with hours in the following if statement
        var thisHour = parseInt($(this).attr("id"));

        // Change class of hours depending on the current hour (this hour)
        if (thisHour > hour) {
            $(this).addClass("future")
        }
        else if (thisHour === hour) {
            $(this).addClass("present");
        }
        else {
            $(this).addClass("past");
        }
    })
}
// calling the pastPresentFuture function
pastPresentFuture();