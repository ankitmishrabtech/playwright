let scores = [45, 82, 91, 60, 73];

// map - transform every element , return a new array
// A map will always  return the same number of elements that you have,
// but based on the condition , their value will be changed
let grades = scores.map(s => s > 70 ? "pass" : "false")
console.log(grades);


// filter - keep elements that pass a test
let passing = scores.filter(s => s > 70);
console.log(passing);

// reduce // reduce - accumulate
let total = scores.reduce((sum, s) => sum + s, 0);
console.log(total);

// score.reduce((a, b) => a+b , 0);

////////------------------------

let nested = [[1, 2], [3, 4], [5]];
console.log(nested.flat());