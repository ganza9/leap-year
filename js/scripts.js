function leapYear(year){
if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) {
    return true;
  } else {
    return false;
  }
  };

$(document).ready(function(){
  $("form#leap-year").submit(function(event) {
    event.preventDefault();
    var year = parseInt($("input#stringIn").val());
    var result = leapYear(year);
    $("#year").text(year);

    if(!result){
      $("#not").text("not");
    } else {
      $("#not").text("");
    }
    $("#stringOut").show();

  });
});
