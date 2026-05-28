let arr = [1, 2, 3];
arr.push(0);
arr.push(4, 5, 6);
console.log(arr)

// Splice( Start, deleteCount, ... itemToAdd)

arr.splice(2, 1);
console.log(arr)

arr.splice(2, 0, 99);   // add 99 at the index second
console.log(arr);


arr.splice(2, 1, 99);    // update the value 99 at the index 2
console.log(arr)


arr.splice(1, 2, 10, 20);
console.log(arr);