// make closure from IIFE
var foo = (function(thing) {
  var x = thing;

  var inner = function(x) {
    console.log("Value of x is: " + x);
  }
  return inner;
})();

var num = foo(5);
var string = foo("a string!")

num;
string;

// original below
/*

var foo = (function() {
  var x = 10;

  var inner = function() {
    console.log("Value of x is: " + x);
  }
  return inner;
})();

foo();
*/