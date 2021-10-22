const {performance} = require('perf_hooks')
let start;
let end;

const gridTraveler = (m, n) => {
    if (m === 1 && n === 1) return 1;
    if (m === 0 || n === 0) return 0;

    return gridTraveler(m - 1, n) + gridTraveler(m, n - 1);
}

start = performance.now();
console.log(gridTraveler(15, 15));
end = performance.now();
console.log((end - start));


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
console.log((end - start));
