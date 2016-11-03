var loadedDie = (function () {
  var count = -1;
  var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  return function() {
    count ++;
    return list[count];
  }

})();

console.log(loadedDie());  // 5
console.log(loadedDie());  // 4
console.log(loadedDie());  // 6