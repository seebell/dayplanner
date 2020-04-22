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
// correlate what you save to the date it was saved
    // on initial load, get today's date, compare with what's in local storage, and save that in localstorage
    // when to wipe the events (when the date in localstorage is different from today's date)
    $('#btn1').click(function() {
      if($('#text1').val()) {
        localStorage.removeItem('text1');
      }
    
      const hour1String = JSON.stringify(hour1);
      
      localStorage.setItem(hour1, $('#text1').val());
    });
    
    $('#btn2').click(function() {
      if($('#text2').val()) {
        localStorage.removeItem('text2');
      }
    
      const hour2String = JSON.stringify(hour2);
    
      localStorage.setItem(hour2, $('#text2').val());
    });
    
    $('#btn3').click(function() {
      if($('#text3').val()) {
        localStorage.removeItem('text3');
      }
    
      const hour3String = JSON.stringify(hour3);
    
      localStorage.setItem(hour3, $('#text3').val());
    });
    
    $('#btn4').click(function() {
      if($('#text4').val()) {
        localStorage.removeItem('text4');
      }
    
      const hour4String = JSON.stringify(hour4);
    
      localStorage.setItem(hour4, $('#text4').val());
    });
    
    $('#btn5').click(function() {
      if($('#text5').val()) {
        localStorage.removeItem('text5');
      }
    
      const hour5String = JSON.stringify(hour5);
    
      localStorage.setItem(hour5, $('#text5').val());
    });
    
    $('#btn6').click(function() {
      if($('#text6').val()) {
        localStorage.removeItem('text6');
      }
    
      const hour6String = JSON.stringify(hour6);
    
      localStorage.setItem(hour6, $('#text6').val());
    });
    
    $('#btn7').click(function() {
      if($('#text7').val()) {
        localStorage.removeItem('text7');
      }
    
      const hour7String = JSON.stringify(hour7);
    
      localStorage.setItem(hour7, $('#text7').val());
    })
    
    $('#btn8').click(function() {
      if($('#text8').val()) {
        localStorage.removeItem('text8');
      }
    
      const hour8String = JSON.stringify(hour8);
    
      localStorage.setItem("text8", $('#text8').val());
    })
    
    $('#btn9').click(function() { 
      if($('#text9').val()) {
        localStorage.removeItem('text9');
      }
    
      const hour9String = JSON.stringify(hour9);
    
      localStorage.setItem(hour9, $('#text9').val());
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