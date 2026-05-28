// Creating Arrays // Array literals preferred
let browsers = ["Chrome", "Firefox", "Safari"];

// Array constructor
let scores = new Array(3);  // empty Array
//After that arrays filled
scores[0] = 1;
scores[1] = 5;
scores[2] = 8;

let scores2 = (1, 2, 3);
console.log(scores);
console.log(scores2);

let numbers = new Array(100, 200, 3000, 400) // 0-3 and 4
console.log(numbers);

let test = Array.of(10, 20, 30, 40, 50);
console.log(test);

let chars = Array.from("hello");
// [h, e, l, l, o]
console.log(chars)

// let numbers = Array.from(1214345)  // not possible
// console.log(numbers)




