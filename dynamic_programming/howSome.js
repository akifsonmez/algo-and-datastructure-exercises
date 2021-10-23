const {performance} = require('perf_hooks');

let start;
let end;

// time => O((number.length ^ targetSum) * targetSum)
// space => O(targetSum)
const howSum = (targetSum, numbers) => {
    if (targetSum === 0) return [];
    if (targetSum < 0) return null;
    for (let num of numbers) {
        let subTarget = targetSum - num;
        let subResult = howSum(subTarget, numbers);
        if (subResult != null) return [...subResult, num];
    }
    return null;
}

start = performance.now();
console.log(howSum(63, [8, 2, 4]));
end = performance.now();
console.log(end - start); // 1367.7696000039577 ms


// time => O((number.length * targetSum) * targetSum)
// space => O(targetSum * targetSum) => consider memo object
const howSumWithMemo = (targetSum, numbers, memo = {}) => {
    if (targetSum in memo) return memo[targetSum];
    if (targetSum === 0) return [];
    if (targetSum < 0) return null;

    for (let num of numbers) {
        let subTarget = targetSum - num;
        let subResult = howSumWithMemo(subTarget, numbers, memo);
        if (subResult !== null) {
            memo[targetSum] = subResult;
            return [...subResult, num];
        }
    }
    memo[targetSum] = null;
    return null;
}

start = performance.now();
console.log(howSumWithMemo(63, [8, 2, 4]));
end = performance.now();
console.log(end - start); // 0.21650001406669617 ms
