'use strict';

let initialTime = 0;
let currentTime = 0;
let minutes = 0;
let seconds = 0;
let interval = null;

function pomodoro(){
  if ( interval != null ) {
    clearInterval(interval);
  }
  initialTime = 1500;
  currentTime = initialTime;
  document.getElementsByClassName('wrapper1')[0].style.display = "grid";
  document.getElementsByClassName('colon')[0].style.display = "inline-block";
  document.getElementById('minuteView').innerText = parseInt(currentTime / 60);
  if ( currentTime % 60 < 10){
      document.getElementById('secondView').innerText = '0' + currentTime % 60;
  } else {
    document.getElementById('secondView').innerText = currentTime % 60;
  }

}

function shortBreak(){
    if ( interval != null ) {
        clearInterval(interval);
    }
    initialTime = 300;
    currentTime = initialTime;
    document.getElementsByClassName('wrapper1')[0].style.display = "grid";
    document.getElementsByClassName('colon')[0].style.display = "inline-block";
    document.getElementById('minuteView').innerText = parseInt(currentTime / 60);
  if ( currentTime % 60 < 10){
        document.getElementById('secondView').innerText = '0' + currentTime % 60;
  } else {
    document.getElementById('secondView').innerText = currentTime % 60;
  }
}

function longBreak(){
    if ( interval != null ) {
        clearInterval(interval);
    }
    initialTime = 600;
    currentTime = initialTime;
    document.getElementsByClassName('wrapper1')[0].style.display = "grid";
    document.getElementsByClassName('colon')[0].style.display = "inline-block";
    document.getElementById('minuteView').innerText = parseInt(currentTime / 60);
  if ( currentTime % 60 < 10){
        document.getElementById('secondView').innerText = '0' + currentTime % 60;
  } else {
    document.getElementById('secondView').innerText = currentTime % 60;
  }
}

function convertToMinutes( currentSeconds ) {
  minutes = parseInt(currentSeconds / 60);
  seconds = currentSeconds % 60;
}

function start() {
    interval = setInterval(function () {
        currentTime--;
        convertToMinutes(currentTime);
        document.getElementById('minuteView').innerText = minutes;
        if ( seconds < 10 ) {
            document.getElementById('secondView').innerText = '0' + seconds;
        } else {
            document.getElementById('secondView').innerText = seconds;
        }
        if( currentTime === 0 ){
          clearInterval(interval);
          playAlarm();
        }
    },1000);
}

function stopTime() {
    clearInterval(interval);
}

function reset() {
  currentTime = initialTime;
    convertToMinutes(currentTime);
    document.getElementById('minuteView').innerText = minutes;
    if ( seconds < 10 ) {
        document.getElementById('secondView').innerText = '0' + seconds;
    } else {
        document.getElementById('secondView').innerText = seconds;
    }
    clearInterval(interval);
}

function playAlarm() {
    let sound = document.getElementById('sound');
    sound.play();
}