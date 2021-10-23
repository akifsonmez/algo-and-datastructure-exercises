const {performance} = require('perf_hooks')

let start;
let end;

// space => O(n) => level of call stack tree
// time => (2**n) => function calls itself twice
const fib = (n) => {
    if (n <= 2) return 1;
    return fib(n - 1) + fib(n - 2);
}
start = performance.now();
console.log(fib(40));
end = performance.now();
console.log(`fib: ${end - start}`);


// dynamic programming (memoization)
// space => O(n) => level of call stack tree
// time => O(n)
const fibWithMemo = (n, memo = {}) => {
    if (n in memo) return memo[n];
    if (n <= 2) return 1;
    memo[n] = fibWithMemo(n - 1, memo) + fibWithMemo(n - 2, memo);
    return memo[n];
}

start = performance.now();
console.log(fibWithMemo(40));
end = performance.now();
console.log(`fib with memo: ${end - start}`);

// with array
// time O(n)
// space O(n)
const fibWithArray = (n) => {
    let fib = [1, 1];
    for (let i = 3; i <= n; i++) {
        fib.push(fib[i - 2] + fib[i - 3])
    }
    return fib[n - 1]
}

start = performance.now();
console.log(fibWithArray(40));
end = performance.now();
console.log(`fib with array: ${end - start}`);

// with array
// time O(n)
// space O(1) ? not sure
const fibWithArray2 = (n) => {
    let fib = [1, 1];
    for (let i = 3; i <= n; i++) {
        let next = fib[0] + fib[1]
        fib[0] = fib[1];
        fib[1] = next;
    }
    return fib[1];
}

start = performance.now();
console.log(fibWithArray2(40));
end = performance.now();
console.log(`fib with array2: ${end - start}`);
