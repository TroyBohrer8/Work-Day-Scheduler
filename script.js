var timeDisplayEl = $('#currentDay');
var currentHour = moment().hours();
var saveBtn = document.querySelector('.saveBtn');
var description = document.querySelector('.description');

var todoList = localStorage.getItem("todo");


function displayDate() {
    var dateTime = moment().format("MMM DD, YYYY [at] hh:mm:ss a");
    timeDisplayEl.text(dateTime);
}

setInterval(displayDate, 1000);

saveBtn.addEventListener("click", function() {
    localStorage.setItem("todo", description);
})

$.each($('.description'), function() {
    
    console.log($(this));
});


function backgroundColor() {
    var workHour = document.getElementsByClassName('.hour');

    if (workHour < currentHour) {
        $(".row").children(".description").addClass("future")
    }
}
