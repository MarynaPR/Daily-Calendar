
//WHEN I open the planner -THEN the current day is displayed at the top of the calendar

//function to display the date
var today = moment().format('MMMM Do YYYY, h:mm:ss a');
var display = document.getElementById("currentDay");
display.innerHTML = today;
console.log("time");

//make interval that runs every min. to refresh the time
setInterval(() => {
    console.log("time update");
    var today = moment().format('MMMM Do YYYY, h:mm:ss a');

}, 10000);

//what the user writes values(id)->put inside the js object->

// WHEN I scroll down-THEN I am presented with timeblocks for standard business hours(8-5?)
var toDo = [];
// WHEN I click into a timeblock-THEN I can enter an event
//in order to stop the page from reloading when the button is clicked, add default prevent
var addToDo = function (event, that) {
    console.log(that)
    console.log($(this));
    event.preventDefault(); //stopts from reloading
    console.log(that.siblings("textarea").val())
    //create object
    var toDoEvent = {

        id: Date.now(), hour: 0, text: "", //method to give current time stamp
        //create properties of the object:
        //event: document.getElementById("event").value, //value of what event was added by user, values for the properties inside the object
    }
    //();
    toDo.push(toDoEvent);//ading event to the array of eventsC(created on top)
    //document.querySelector("div-since inside the div?").reset(); to clear the text for the next entry
    localStorage.setItem("listToDo", JSON.stringify(toDo)); //take the array of events we are going to create = toDo, not the object. Add array to the local storage
}
//add it to local storage
$("button").on("click", function (event) {
    console.log($(this))
    var that = $(this);
    addToDo(event, that);
})

// WHEN I view the timeblocks for that day-THEN each timeblock is color coded to indicate whether it is in the past, present, or future

var updateHourBlocks = function () {
    //use moments to get the current hour
    var currentHour = moment().hour();

    console.log(currentHour);

    //loop over all the timeblocks,(use for loop instead)?
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
    localStorage.setItem("toDo", JSON.stringify(toDo));
    console.log(saveToDo);
    console.log(toDo);
};
saveToDo();

$(".btn saveBtn").on("click", function () {
    console.log("savebutton");
    var hour = $(this).parent().attr("id");
    var description = $(this).siblings(". textarea").val();

    localStorage.setItem(hour, description);
    console.log(hour);
    console.log(description);

});

// WHEN I refresh the page-THEN the saved events persist

//loading input from local storage: timeblocks 
$("#hour8 .description").val(localStorage.getItem("hour8"));
$("#hour9 .description").val(localStorage.getItem("hour9"));
$("#hour10 .description").val(localStorage.getItem("hour10"));
$("#hour11 .description").val(localStorage.getItem("hour11"));
$("#hour12 .description").val(localStorage.getItem("hour12"));
$("#hour13 .description").val(localStorage.getItem("hour13"));
$("#hour14 .description").val(localStorage.getItem("hour14"));
$("#hour15 .description").val(localStorage.getItem("hour15"));
$("#hour16 .description").val(localStorage.getItem("hour16"));
$("#hour17 .description").val(localStorage.getItem("hour17"));
$("#hour18 .description").val(localStorage.getItem("hour18"));
$("#hour19 .description").val(localStorage.getItem("hour19"));
$("#hour20 .description").val(localStorage.getItem("hour20"));


//add eventListeners first
//document.addEventListener("DOMContentLoaded", () => {
// console.log("test", document.querySelectorAll("button"))
// document.querySelectorAll("button").addEventListener("click", addToDo);//whenever there's a click(any event) call the function based on that event
// console.log("addToDo");
//}); //add function to add toD


