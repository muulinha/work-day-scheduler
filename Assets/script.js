// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
// $(function () {
var workingHours = ["9","10","11","12",13,14,15,16,17];
var description = $(".time");

  var d = new Date();
  var hour = d.getHours();

  for (var workingHoursIndex = 0; workingHoursIndex < workingHours.length; workingHoursIndex++) {
    if (hour > workingHours[workingHoursIndex]) {
    description.attr("id","past");
  } else {
    description.attr("id","future");
  }
};


 
 




//   // TODO: Add a listener for click events on the save button. This code should
//   // use the id in the containing time-block as a key to save the user input in
//   // local storage. HINT: What does `this` reference in the click listener
//   // function? How can DOM traversal be used to get the "hour-x" id of the
//   // time-block containing the button that was clicked? How might the id be
//   // useful when saving the description in local storage?
//   //
//   // TODO: Add code to apply the past, present, or future class to each time
//   // block by comparing the id to the current hour. HINTS: How can the id
//   // attribute of each time-block be used to conditionally add or remove the
//   // past, present, and future classes? How can Day.js be used to get the
//   // current hour in 24-hour time?
//   //
//   // TODO: Add code to get any user input that was saved in localStorage and set
//   // the values of the corresponding textarea elements. HINT: How can the id
//   // attribute of each time-block be used to do this?
//   //
//   // TODO: Add code to display the current date in the header of the page.
// });


// Day Time on the top __________________________________________________________________________________
var today = dayjs().format("dddd, MMMM D");
$("#currentDay").text(today);
// Day Time on the top __________________________________________________________________________________








// each timeblock is color coded to indicate whether it is in the past, present, or future
// var timeNow = dayjs().format("hh:mm:ss");
// var hourTen = dayjs("11:00").format('hh:mm');
// var description = document.querySelector(".description");

// console.log(timeNow);
// console.log(hourTen);

// if (timenow - hourTen < 0) {
// description.attr("class", "past");
//   };
// click the save button for that timeblock THEN the text for that event is saved in local storage
// var textArea9 = document.querySelector("#description9")

// function storage() {
//   var lastGrade = JSON.parse(localStorage.getItem("savedTask"));
//   if (lastGrade !== null) {
//     textArea9.innerHTML = task;
//     lists = lastGrade;
// } else {
//   return;
// };
// }

// var saveBtn = document.querySelector(".btn")
// saveBtn.addEventListener("click", function() {
//   var savedTask = {
//     task: textArea9.value,
//   };
//   localStorage.setItem("savedTask", JSON.stringify(savedTask));
//   storage();
//   }
// );




// WHEN I refresh the page THEN the saved events persist





