// Day Time on the top __________________________________________________________________________________
var today = dayjs().format("dddd, MMMM D");
$("#currentDay").text(today);
// Day Time on the top __________________________________________________________________________________


// Past/Future background colors __________________________________________________________________________
var currentHour = moment().hours();

$(".time-block").each(function () {
  var blockHour = parseInt($(this).attr("id").split("-")[1]);
  // console.log(blockHour);
 
  if (blockHour == currentHour) {
    $(this).addClass("present");
  } else if (blockHour > currentHour) {
    $(this).addClass("future") 
  } else {
    $(this).addClass("past")
  }
  });
// Past/Future background colors __________________________________________________________________________


// Save buton _______________________________________________________________________________________________
$('.saveBtn').click(function() {
  let elementId = $(this).parent().attr('id');
  let data = $(this).parent().children('textarea').val();
  console.log(data)
  localStorage.setItem(elementId, data);
});

$(document).ready(function() {
  $('.description').each(function() {
    let elementId = $(this).parent().attr('id');
    let savedData = localStorage.getItem(elementId);
    $(this).text(savedData);
  });
});
// Save buton _______________________________________________________________________________________________