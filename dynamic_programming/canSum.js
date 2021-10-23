const {performance} = require('perf_hooks');

let start;
let end;

// time => O(numbers.length ^ targetSum)
// space => O(targetSum)
const canSum = (targetSum, numbers) => {
    if (targetSum === 0) return true;
    if (targetSum < 0) return false;
    for (let num of numbers) {
        if (canSum((targetSum - num), numbers)) {
            return true;
        }
    }
    return false;
}

start = performance.now();
console.log(canSum(63, [2, 4]));
end = performance.now();
console.log(end - start); // 155.08300000429153 ms


// time => O(targetSum * numbers.length) ? not sure why
// space => O(targetSum)
const canSumWithMemo = (targetSum, numbers, memo = {}) => {
    if (targetSum in memo) return memo[targetSum];
    if (targetSum === 0) return true;
    if (targetSum < 0) return false;

    for (let num of numbers) {
        const subTargetSum = targetSum - num;
        if (canSumWithMemo(subTargetSum, numbers, memo)) {
            memo[targetSum] = true;
            return true;
        }
    }
    memo[targetSum] = false;
    return false;
}

start = performance.now();
console.log(canSumWithMemo(63, [2, 4]));
end = performance.now();
console.log(end - start); // 0.24660000205039978 ms
