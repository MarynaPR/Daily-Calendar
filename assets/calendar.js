var events = [];

//WHEN I open the planner -THEN the current day is displayed at the top of the calendar
//function to display the date
var today = moment().format('MMMM Do YYYY, h:mm:ss a');
var display = document.getElementById("currentDay");
display.innerHTML = today;
console.log("time");

//make interval that runs every sec. to refresh the time
setInterval(() => {
    console.log("time update");
    var today = moment().format('MMMM Do YYYY, h:mm:ss a');

}, 10000);

//what the user writes values(id)->put inside the js object->

//add eventListeners first
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("button").addEventListener("click", addEvent);
    console.log("addEvent");
}); //add function to add Event

// WHEN I scroll down-THEN I am presented with timeblocks for standard business hours(8-5?)

// WHEN I view the timeblocks for that day-THEN each timeblock is color coded to indicate whether it is in the past, present, or future

// WHEN I click into a timeblock-THEN I can enter an event




// WHEN I click the save button for that timeblock-THEN the text for that event is saved in local storage
// var saveEvents = function () {
//     localStorage.setItem("events", JSON.stringify(events));
// };
// saveEvents();
// WHEN I refresh the page-THEN the saved events persist



// $("#currentDay").text(currentTime);
// console.log("moment", moment().hours());
// var = events{ };
