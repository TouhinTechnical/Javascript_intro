// variable replace kaz jnno (swap kora)
var first = 5;
var second = 7;
console.log(first, second);
// Swap
var temp = first; // temp variable nilam
first = second;
second = temp;
console.log(first, second);
// destructing(swap shortcut)
// [first, second] = [second, first];
// console.log(first, second);