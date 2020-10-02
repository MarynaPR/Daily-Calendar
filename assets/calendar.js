//WHEN I open the planner -THEN the current day is displayed at the top of the calendar
//function to display the date
var today = moment().format('MMMM Do YYYY, h:mm:ss a');
var display = document.getElementById("currentDay");
display.innerHTML = today;
console.log("time");


// WHEN I scroll down-THEN I am presented with timeblocks for standard business hours(8-5?)

// WHEN I view the timeblocks for that day-THEN each timeblock is color coded to indicate whether it is in the past, present, or future

// WHEN I click into a timeblock-THEN I can enter an event

// WHEN I click the save button for that timeblock-THEN the text for that event is saved in local storage
// var saveEvents = function () {
//     localStorage.setItem("events", JSON.stringify(events));
// };
// saveEvents();
// WHEN I refresh the page-THEN the saved events persist


//make interval that runs every sec. to refresh the time
setInterval(() => {
    console.log("time update");
    var today = moment().format('MMMM Do YYYY, h:mm:ss a');

}, 1000);

// $("#currentDay").text(currentTime);
// console.log("moment", moment().hours());
// var = events{ };

//call function when open/refresh the page