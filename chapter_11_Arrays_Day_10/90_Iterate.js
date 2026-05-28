// Iterate - go from one to another

let tests = ["test", "checkout", "search"];

for (let i = 0; i <= tests.length; i++) {
    console.log(tests[i]);
}

console.log("-------------------------------");

// for... of (cleanest for values)

for (test of tests) {
    console.log(test);
}

console.log("-------------------------------");

tests.forEach((test, index) => {
    console.log(test, index);
});

tests.forEach((i, index) => {
    console.log(i, index);
});

console.log("-------------------------------");

let students = ["ankit", "ajay", "rahul", "mishra"];

for (let student in students) {

    console.log(student, "->", students[student]);

}


////////////////////////////// not used but you can see


for (let [i, test] of tests.entries()) {
    console.log(i, test);
}




