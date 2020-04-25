var clockNow = moment().format('dddd, MMMM Do YYYY');
var currentNow = moment().format('h');
var currentNow24= parseInt(moment().format('HH'));
var currentNowInt = parseInt(currentNow);
var Timer;

var current1 = $('#clock1').text();
var current2 = $('#clock2').text();
var current3 = $('#clock3').text();
var current4 = $('#clock4').text();
var current5 = $('#clock5').text();
var current6 = $('#clock6').text();
var current7 = $('#clock7').text();
var current8 = $('#clock8').text();
var current9 = $('#clock9').text();

var currentInt = parseInt(current1);
var current2Int = parseInt(current2);
var current3Int = parseInt(current3);
var current4Int = parseInt(current4);
var current5Int = parseInt(current5);
var current6Int = parseInt(current6);
var current7Int = parseInt(current7);
var current8Int = parseInt(current8);
var current9Int = parseInt(current9);
    
     $(".btn-info").on("click", function(event) {
       console.log(event.target.previousElementSibling.id);
       console.log(event);
       var key = event.target.previousElementSibling.id;
       var value = event.target.previousElementSibling.value;
       localStorage.setItem(key, value);
     })
    

$('#currentDay').append(clockNow);

colorChange();

function colorChange() {

  TIMER = setInterval(colorChange, 1000);
  
  if(currentNow24 >= 9 && currentNow24 <= 17) {

    for (var i =1; i<=9 ; i++) { 
     var currentInInt = parseInt($('#clock'+i).text());

      if (currentInInt < 9) {
        currentInInt = currentInInt + 12;
      }
      
      if (currentInInt == currentNow24) {
        $('#text'+i).css('background-color', '#ff6961');
        continue;
      }
      
      if (currentInInt < currentNow24) {
        $('#text'+i).css('background-color', 'lightgray');
      } 
      else {
        $('#text'+i).css('background-color', 'lightgreen');
      }
    }

  }
  else {
    clearInterval(TIMER);
    $('textarea').css('background-color', 'pink');
  }
}

var storedDate = localStorage.getItem("clockNow");
console.log(clockNow);

if (storedDate !== clockNow) {

  localStorage.removeItem("text1");
  localStorage.removeItem("text2");
  localStorage.removeItem("text3");
  localStorage.removeItem("text4");
  localStorage.removeItem("text5");
  localStorage.removeItem("text6");
  localStorage.removeItem("text7");
  localStorage.removeItem("text8");
  localStorage.removeItem("text9");
  
  } 
else{

$("#text1").val(localStorage.getItem("text1"));
$("#text2").val(localStorage.getItem("text2"));
$("#text3").val(localStorage.getItem("text3"));
$("#text4").val(localStorage.getItem("text4"));
$("#text5").val(localStorage.getItem("text5"));
$("#text6").val(localStorage.getItem("text6"));
$("#text7").val(localStorage.getItem("text7"));
$("#text8").val(localStorage.getItem("text8"));
$("#text9").val(localStorage.getItem("text9"));
}

