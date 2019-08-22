$(document).ready(function(){
$("form#year").submit(function(event){
 event.preventDefault();
  var year = parseInt($("input#useryear").val());
  var result = leapYear(year);
  $("result").text(result);
  var leapYear = function(year){
    if(year%100===0) {
      return false;
    }else if(year%4===0){
      return true;
    }else {
    return false;
    }
    }
  })
})
