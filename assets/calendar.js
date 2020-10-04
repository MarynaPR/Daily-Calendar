
//WHEN I open the planner -THEN the current day is displayed at the top of the calendar

//function to display the date
var today = moment().format('MMMM Do YYYY, h:mm:ss a');
var display = document.getElementById("currentDay");
display.innerHTML = today;
console.log("time");

//interval that runs every min to refresh the time
setInterval(() => {
    console.log("time update");
    var today = moment().format('MMMM Do YYYY, h:mm:ss a');
}, 10000);

//what the user writes values(id)->put inside the js object->

// WHEN I scroll down-THEN I am presented with timeblocks for standard business hours 9-5
// WHEN I click into a timeblock-THEN I can enter an event
var toDo = [];
var addToDo = function (event, that) {
    console.log(that)
    console.log($(this));
    //stops the page from reloading when the button is clicked
    event.preventDefault();
    console.log(that.siblings("textarea").val())
    //create object
    var toDoEvent = {
        id: Date.now(), hour: 0, text: "",
        //create properties of the object; value added by user=>values for the properties inside the object
    }
    toDo.push(toDoEvent);//ading event to the array
    localStorage.setItem("listToDo", JSON.stringify(toDo));
}
$("button").on("click", function (event) {
    console.log($(this))
    var that = $(this);
    addToDo(event, that);
})

// WHEN I view the timeblocks for that day-THEN each timeblock is color coded to indicate whether it is in the past, present, or future
var updateHourBlocks = function () {
    //use momentsjs to get the current hour
    var currentHour = moment().hour();
    console.log(currentHour);

    //loop over all the timeblocks
    $(".time-block").each(function () {
        var hourInput = parseInt($(this).attr("id").split("hour")[1]);
        //console.log(hourInput);

        //past hour-connect to class"past/present/future css"
        if (hourInput < currentHour) {
            $(this).attr("class", "past row time-block");

            //.this-object that is executing current function
        } else if (hourInput === currentHour) {

            //add remove  attr for pastpresent hour
            $(this).removeAttr("class", "past row time-block");
            $(this).attr("class", "present row time-block");

        } else {
            //add future/remove attr for past and present
            $(this).removeAttr("class", "past row time-block");
            $(this).removeAttr("class", "present row time-block");
            $(this).attr("class", "future row time-block");
        }
    });
}
updateHourBlocks();

// WHEN I click the save button for that timeblock-THEN the text for that event is saved in local storage
var saveToDo = function () {
    $(".saveBtn").on("click", function (event) {
        console.log("saveBtn");

        var hour = $(this).parent().attr("id");
        var textToDo = $(this).siblings(".textarea").val();

        localStorage.setItem(hour, textToDo);
        localStorage.setItem("hour9", $("#hour9 .description").val());
        localStorage.setItem("hour10", $("#hour10 .description").val());
        localStorage.setItem("hour11", $("#hour11 .description").val());
        localStorage.setItem("hour12", $("#hour12 .description").val());
        localStorage.setItem("hour13", $("#hour13 .description").val());
        localStorage.setItem("hour14", $("#hour14 .description").val());
        localStorage.setItem("hour15", $("#hour15 .description").val());
        localStorage.setItem("hour16", $("#hour16 .description").val());
        localStorage.setItem("hour17", $("#hour17 .description").val());
    });
};
saveToDo();

// WHEN I refresh the page-THEN the saved events persist
//loading input from local storage: timeblocks on refresh-get items from the local storage:
$(document).ready(function () {
    console.log("show")
    $("#hour9 .description").val(localStorage.getItem("#hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("#hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));
});


