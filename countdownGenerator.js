'use strict';

const countdownGenerator = function (tMinus) {
  let tPlus = 0;
  const messages = [
    "Blast Off!",
    "Rockets already gone, bub!"
    ];
  return function() {
    if (tMinus > 0) {
      console.log("T-minus " + tMinus + "...");
      return tMinus--;
    } if (tPlus === 0) {
      console.log(messages[tPlus]);
      return tPlus++;
    } if (tPlus === 1) {
      console.log(messages[tPlus]);
      return;
    }
  };
};

const countdown = countdownGenerator(13);

countdown();
countdown();
countdown();
countdown();
countdown();
countdown();
countdown();
countdown();
countdown();
countdown();
countdown();
countdown();
countdown();
countdown();
countdown();
countdown();

// function to call countdown n number times?

/*
const timer = function (func, time) {
  let stopwatch = time;
    for (var i = 0; i < time; i++) {
      console.log(stopwatch, time)
      func(time);
    }

};
*/
// timer(countdownGenerator(), 5); // must call func with () !


