const numbers = [23,30,40];

console.log(numbers.reduce(myfun))

function myfun(acc, total) {
 return total - acc;
} 