var loadedDie = (function () {
  var repeatCount = 1;
  // repeatCount gives appearance of randomness when rolled 10+ times
  var count = -1;
  var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  return function() {
    if (count === list.length - 1) { // so it never runs out!
      count = repeatCount;
      repeatCount ++;
      }
    else count ++;
    return list[count];
  }

})();

console.log(loadedDie());  // 5
console.log(loadedDie());  // 4
console.log(loadedDie());  // 6