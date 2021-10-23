const {performance} = require('perf_hooks')
let start;
let end;

// time => O(2 ^ (n+m)) => function calls itself twice (2 * 2 * 2 * 2 ...) (n+m) times (or level of the call tree)
// space => O(m + n) => level of call tree => from (m, n) to (1,1)
const gridTraveler = (m, n) => {
    if (m === 1 && n === 1) return 1;
    if (m === 0 || n === 0) return 0;

    return gridTraveler(m - 1, n) + gridTraveler(m, n - 1);
}

start = performance.now();
console.log(gridTraveler(15, 15));
end = performance.now();
console.log(end - start); // 1061.4469999969006 ms

// time(m*n) => total number of calls => combination of (0, 1, 2 ... ,m) and (0, 1, 2, ... ,n)
// space => O(m + n) => level of call tree => from (m, n) to (1,1)
const gridTravelerWithMemo = (m, n, memo = {}) => {
    const key = `${m},${n}`;
    if (key in memo) return memo[key];
    if (m === 1 && n === 1) return 1;
    if (m === 0 || n === 0) return 0;
    memo[key] = gridTravelerWithMemo(m - 1, n, memo) + gridTravelerWithMemo(m, n - 1, memo);
    return memo[key];
}

start = performance.now();
console.log(gridTravelerWithMemo(15, 15));
end = performance.now();
console.log(end - start); // 0.3742000162601471 ms
