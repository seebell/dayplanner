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

var current1Int = parseInt(current1);
var current2Int = parseInt(current2);
var current3Int = parseInt(current3);
var current4Int = parseInt(current4);
var current5Int = parseInt(current5);
var current6Int = parseInt(current6);
var current7Int = parseInt(current7);
var current8Int = parseInt(current8);
var current9Int = parseInt(current9);

// Storing user input in the local Storage

$('#btn1').click(function() {
  if($('#text1').val()) {
    localStorage.removeItem('text1');
  }

  var current1String = JSON.stringify(current1);
  
  localStorage.setItem(current1, $('#text1').val());
});

$('#btn2').click(function() {
  if($('#text2').val()) {
    localStorage.removeItem('text2');
  }

  var current2String = JSON.stringify(current2);

  localStorage.setItem(current2, $('#text2').val());
});

$('#btn3').click(function() {
  if($('#text3').val()) {
    localStorage.removeItem('text3');
  }

  var current3String = JSON.stringify(current3);

  localStorage.setItem(current3, $('#text3').val());
});

$('#btn4').click(function() {
  if($('#text4').val()) {
    localStorage.removeItem('text4');
  }

  var current4String = JSON.stringify(current4);

  localStorage.setItem(current4, $('#text4').val());
});

$('#btn5').click(function() {
  if($('#text5').val()) {
    localStorage.removeItem('text5');
  }

  var current5String = JSON.stringify(current5);

  localStorage.setItem(current5, $('#text5').val());
});

$('#btn6').click(function() {
  if($('#text6').val()) {
    localStorage.removeItem('text6');
  }

  var current6String = JSON.stringify(current6);

  localStorage.setItem(current6, $('#text6').val());
});

$('#btn7').click(function() {
  if($('#text7').val()) {
    localStorage.removeItem('text7');
  }

  var current7String = JSON.stringify(current7);

  localStorage.setItem(current7, $('#text7').val());
})

$('#btn8').click(function() {
  if($('#text8').val()) {
    localStorage.removeItem('text8');
  }

  var current8String = JSON.stringify(current8);

  localStorage.setItem("text8", $('#text8').val());
})

$('#btn9').click(function() { 
  if($('#text9').val()) {
    localStorage.removeItem('text9');
  }

  var current9String = JSON.stringify(current9);

  localStorage.setItem(current9, $('#text9').val());
})

// Displaying the time using moment.js

$('#currentDay').append(clockNow);

// Adding color change to reflect whether the time slot is in the past, the present or the future 

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
        $('#text'+i).css('background-color', '#FB8F78');
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