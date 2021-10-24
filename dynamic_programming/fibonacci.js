const {performance} = require('perf_hooks')

let start;
let end;


/*
*                 5
*              /     \
*             4       3
*            / \     / \
*           3   2   2   1
*          / \
*         2   1
*
* */
// time => O(2 ^ n) => function calls itself twice (2 * 2 * 2 * 2 ...) n times (or level of the call tree)
// space => O(n) => level of call stack tree
const fib = (n) => {
    if (n <= 2) return 1;
    return fib(n - 1) + fib(n - 2);
}
start = performance.now();
console.log(fib(40));
end = performance.now();
console.log(`fib: ${end - start}`); // 783.9511000216007 ms



/*
*                  5
*                 / \
*                4   3
*               / \
*              3   2
*             / \
*            2   1
*
* */
// dynamic programming (memoization) some kind of caching
// time => O(n) => number of calls =~ (2 * n)
// space => O(n) => level of call stack tree
const fibWithMemo = (n, memo = {}) => {
    if (n in memo) return memo[n];
    if (n <= 2) return 1;
    memo[n] = fibWithMemo(n - 1, memo) + fibWithMemo(n - 2, memo);
    return memo[n];
}

start = performance.now();
console.log(fibWithMemo(40));
end = performance.now();
console.log(`fib with memo: ${end - start}`); //  0.2336999773979187 ms

// dynamic programming (tabulation)
// time O(n)
// space O(n)
const fibWithTabulation = (n) => {
    let fib = [1, 1];
    for (let i = 3; i <= n; i++) {
        fib.push(fib[i - 2] + fib[i - 3])
    }
    return fib[n - 1]
}

start = performance.now();
console.log(fibWithTabulation(40));
end = performance.now();
console.log(`fib with tabulation: ${end - start}`); //  0.22499999403953552 ms

// dynamic programming (tabulation)
// time O(n)
// space O(1) ? not sure
const fibWithTabulation2 = (n) => {
    let fib = [1, 1];
    for (let i = 3; i <= n; i++) {
        let next = fib[0] + fib[1]
        fib[0] = fib[1];
        fib[1] = next;
    }
    return fib[1];
}

start = performance.now();
console.log(fibWithTabulation2(40));
end = performance.now();
console.log(`fib with tabulation2: ${end - start}`); //  0.2410999834537506 ms
