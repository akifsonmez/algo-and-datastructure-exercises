// space => O(n) => level of call stack tree
// time => (2**n)

const {performance} = require('perf_hooks')
let start;
let end;

const fib = (n) => {
    if (n <= 2) return 1;
    return fib(n - 1) + fib(n - 2);
}
start = performance.now();
console.log(fib(40));
end = performance.now();
console.log(`fib: ${end - start}`);


// dynamic programming
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
