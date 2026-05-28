let results = ["pass", "fail", "pass", "error", "fail"]

// indexOf -- Resturns first index, or -1 if not found

results.indexOf("fail");  //1
results.indexOf("skip");   // -1


// lastIndexOf -- Search from the end

results.lastIndexOf("fail");  // 4


// includes - returns booleans

results.includes("error");       // true
results.includes("skip");    // False


//find - returns first matching element

let nums = [10, 25, 30, 45];
nums.find(x => x > 20);   // 25

//findIndex
nums.findIndex(x => x > 20);  /// 1,2,3

num.findLast(x => x > 20);     // 45
num.findLastIndex(x => x > 20);  // 2