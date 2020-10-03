
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

var toDo = [];
//in order to stop the page from reloading when the button is clicked, add default prevent
var addToDo = (event) => {
    event.preventDefault(); //stopts from reloading
    //create object
    var toDoEvent = {

        id: Date.now(), //method to give current time stamp
        //create properties of the object:
        event: document.getElementById("event").value, //value of what event was added by user, values for the properties inside the object
    }
    //();
    toDo.push(toDoEvent);//ading event to the array of eventsC(created on top)
    //document.querySelector("div-since inside the div?").reset(); to clear the text for the next entry

}
//add it to local storage
localStorage.setItem("listToDo", JSON.stringify(toDo)); //take the array of events we are going to create = toDo, not the object. Add array to the local storage

//add eventListeners first
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("button").addEventListener("click", addToDo);//whenever there's a click(any event) call the function based on that event
    console.log("addToDo");
}); //add function to add todo



// WHEN I scroll down-THEN I am presented with timeblocks for standard business hours(8-5?)

// WHEN I view the timeblocks for that day-THEN each timeblock is color coded to indicate whether it is in the past, present, or future

var updateHourBlocks = function () {
    //use moments to get the current hour
    var currentHour = moment().hour();

    // console.log(currentHour);


    //from homework:
    // loop over object properties
    //   $.each(tasks, function(list, arr) {
    //     // then loop over sub-array
    //     arr.forEach(function(task) {
    //       createTask(task.text, task.date, list);
    //     });

    //loop ob\ver all the timeblocks
    $(".time-block").each(function () {

        var hourInput = parseInt($(this).attr("id").split("-")[1]);
        //console.log(hourInput);

        //past hour-connect to class"past/present/future css"
        if (hourInput < currentHour) {
            $(this).attr("class", "past");

            //.this-object that is executing current function
        } else if (hourInput === currentHour) {

            //add remove  attr for pastpresent hour
            $(this).removeAttr("class", "past");
            $(this).attr("class", "present");

        } else {
            //add future/remove attr for past and present
            $(this).removeAttr("class", "past");
            $(this).removeAttr("class", "present");
            $(this).attr("class", "future");
        }

    });

}
updateHourBlocks();

//var interval = setInterval(upsdateHourBlocks, 1000);
//console.log(hour);

// var now = moment().hour();
// setInterval(() => {
//     console.log("hour update");
//     var now = moment().hour();

// }, 1000);



// WHEN I click into a timeblock-THEN I can enter an event


// WHEN I click the save button for that timeblock-THEN the text for that event is saved in local storage
var saveToDo = function () {
    localStorage.setItem("toDo", JSON.stringify(toDo));
    console.log(save);
};
saveToDo();
// saveToDo();
// WHEN I refresh the page-THEN the saved events persist
//loading input from local storage: timeblocks 
$("#hour8 .description").val(localStorage.getItem("hour8"));
//with 24 hour format or am-pm to display color?