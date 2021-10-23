const {performance} = require('perf_hooks');

let start;
let end;

// time => O(numbers.length ^ targetSum * targetSum)
// space => O(targetSum * targetSum)
const bestSum = (targetSum, numbers) => {
    if (targetSum === 0) return [];
    if (targetSum < 0) return null;

    let bestSumResult = null;
    for (let num of numbers) {
        let subTargetSum = targetSum - num;
        let subBestSumResult = bestSum(subTargetSum, numbers);
        if (subBestSumResult !== null) {
            subBestSumResult = [...subBestSumResult, num]
            if (bestSumResult === null || subBestSumResult.length < bestSumResult.length) {
                bestSumResult = subBestSumResult
            }
        }
    }
    return bestSumResult;
}

start = performance.now()
console.log(bestSum(51, [1, 9, 10]));
end = performance.now()
console.log(end - start) // 65.06939998269081 ms


// time => O((numbers.length * targetSum ) * targetSum) ??
// space => O(targetSum * targetSum)
const bestSumWithMemo = (targetSum, numbers, memo = {}) => {
    if (targetSum in memo) return memo[targetSum];
    if (targetSum === 0) return [];
    if (targetSum < 0) return null;

    let bestSumResult = null;
    for (let num of numbers) {
        let subTargetSum = targetSum - num;
        let subBestSumResult = bestSumWithMemo(subTargetSum, numbers, memo);
        if (subBestSumResult !== null) {
            subBestSumResult = [...subBestSumResult, num]
            if (bestSumResult === null || subBestSumResult.length < bestSumResult.length) {
                bestSumResult = subBestSumResult
            }
        }
    }
    memo[targetSum] = bestSumResult;
    return bestSumResult;
}


start = performance.now()
console.log(bestSumWithMemo(51, [1, 9, 10]));
end = performance.now()
console.log(end - start) // 1.7371000051498413 ms
