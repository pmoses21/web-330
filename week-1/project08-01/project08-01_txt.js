"use strict";
/*    JavaScript 7th Edition
      Chapter 8
      Project 08-01

      Project to create a timer object
      Author: Pat M
      Date: 10/23/26

      Filename: project08-01.js
*/

/*--------------- Object Code --------------------*/

/* Constructor function for the timer object */
function timer(min, sec) {
   this.minutes = min;

   this.seconds = sec;

   this.timeID = null;
}

/* Method to run or pause the timer */
timer.prototype.runPause = function(timer, minBox, secBox) {
   if (timer.timeID) {

      // Timer is running, so pause it
      window.clearInterval(timer.timeID);

      timer.timeID = null;

   } else {
      // Timer is paused, so start it
      timer.timeID = window.setInterval(countdown, 1000);
   }

   /* Function to updates the timer every second */
   function countdown() {
      if (timer.seconds > 0) {

         timer.seconds--;

      } else if (timer.minutes > 0) {

         timer.minutes--;

         timer.seconds = 59;

      } else {
         // The timer has reached 0:0, stop it
         window.clearInterval(timer.timeID);

         timer.timeID = null;
      }


      minBox.value = timer.minutes;

      secBox.value = timer.seconds;
   }
};

/*---------------Interface Code -----------------*/

let minBox = document.getElementById("minutesBox");

let secBox = document.getElementById("secondsBox");

let runPauseTimer = document.getElementById("runPauseButton");


let myTimer = new timer(minBox.value, secBox.value);

minBox.onchange = function() {
   myTimer.minutes = minBox.value;
};

secBox.onchange = function() {
   myTimer.seconds = secBox.value;
};

/* Run/pause the timer on click */
runPauseTimer.onclick = function() {
   myTimer.runPause(myTimer, minBox, secBox);
};