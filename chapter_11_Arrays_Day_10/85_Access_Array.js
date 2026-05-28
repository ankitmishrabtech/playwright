// Accessing and Modifying

let statuses = ["pass", "fail", "skip"];
console.log(statuses[0]);
console.log(statuses[2]);

console.log(statuses.at(-1)); // -1 = last =2
console.log(statuses.at(-3)); // -3 = first =0
console.log(statuses.at(-4)); // undefined 

// modify

statuses[1] = "blocked";
console.log(statuses);