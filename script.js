var clockNow = moment().format('dddd, MMMM Do YYYY');
var hourNow = moment().format('h');
var hourNow24= parseInt(moment().format('HH'));
var hourNowInt = parseInt(hourNow);
var Timer;

var hour1 = $('#clock1').text();
var hour2 = $('#clock2').text();
var hour3 = $('#clock3').text();
var hour4 = $('#clock4').text();
var hour5 = $('#clock5').text();
var hour6 = $('#clock6').text();
var hour7 = $('#clock7').text();
var hour8 = $('#clock8').text();
var hour9 = $('#clock9').text();

var hour1Int = parseInt(hour1);
var hour2Int = parseInt(hour2);
var hour3Int = parseInt(hour3);
var hour4Int = parseInt(hour4);
var hour5Int = parseInt(hour5);
var hour6Int = parseInt(hour6);
var hour7Int = parseInt(hour7);
var hour8Int = parseInt(hour8);
var hour9Int = parseInt(hour9);

// Store user input in local Storage

$('#btn1').click(function() {
  if($('#text1').val()) {
    localStorage.removeItem('text1');
  }

  var hour1String = JSON.stringify(hour1);
  
  localStorage.setItem(hour1, $('#text1').val());
});

$('#btn2').click(function() {
  if($('#text2').val()) {
    localStorage.removeItem('text2');
  }

  var hour2String = JSON.stringify(hour2);

  localStorage.setItem(hour2, $('#text2').val());
});

$('#btn3').click(function() {
  if($('#text3').val()) {
    localStorage.removeItem('text3');
  }

  var hour3String = JSON.stringify(hour3);

  localStorage.setItem(hour3, $('#text3').val());
});

$('#btn4').click(function() {
  if($('#text4').val()) {
    localStorage.removeItem('text4');
  }

  var hour4String = JSON.stringify(hour4);

  localStorage.setItem(hour4, $('#text4').val());
});

$('#btn5').click(function() {
  if($('#text5').val()) {
    localStorage.removeItem('text5');
  }

  var hour5String = JSON.stringify(hour5);

  localStorage.setItem(hour5, $('#text5').val());
});

$('#btn6').click(function() {
  if($('#text6').val()) {
    localStorage.removeItem('text6');
  }

  var hour6String = JSON.stringify(hour6);

  localStorage.setItem(hour6, $('#text6').val());
});

$('#btn7').click(function() {
  if($('#text7').val()) {
    localStorage.removeItem('text7');
  }

  var hour7String = JSON.stringify(hour7);

  localStorage.setItem(hour7, $('#text7').val());
})

$('#btn8').click(function() {
  if($('#text8').val()) {
    localStorage.removeItem('text8');
  }

  var hour8String = JSON.stringify(hour8);

  localStorage.setItem("text8", $('#text8').val());
})

$('#btn9').click(function() { 
  if($('#text9').val()) {
    localStorage.removeItem('text9');
  }

  var hour9String = JSON.stringify(hour9);

  localStorage.setItem(hour9, $('#text9').val());
})

// Display the time using moment.js

$('#currentDay').append(clockNow);

// Color coding to reflect whether the time slot is in the past, the present or the future 

colorCoding();

function colorCoding() {

  TIMER = setInterval(colorCoding, 1000);
  // Test check: hourNow24 = 20;
  if(hourNow24 >= 9 && hourNow24 <= 17) {

    for (var i =1; i<=9 ; i++) { 
     var hourInInt = parseInt($('#clock'+i).text());

      if (hourInInt < 9) {
        hourInInt = hourInInt + 12;
      }
      
      if (hourInInt == hourNow24) {
        $('#text'+i).css('background-color', '#FB8F78');
        continue;
      }
      
      if (hourInInt < hourNow24) {
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