const {performance} = require('perf_hooks');

let start;
let end;

// time ?
// space ?
const allConstruct = (targetWord, wordBank) => {
    if (targetWord === '') return [[]];

    let result = []
    for (let word of wordBank) {
        if (targetWord.indexOf(word) === 0) {
            let subTargetWord = targetWord.slice(word.length);
            let subAllConstructResult = allConstruct(subTargetWord, wordBank).map(l => [word, ...l]);
            result.push(...subAllConstructResult)
        }
    }

    return result;
}


start = performance.now();
console.log(allConstruct("aaaaaaaaaaaaaaaaaaaaaz", ["a", "aa", "aaa", "aaaa", "aaaaa", "aaaaa"]));
end = performance.now();
console.log(end - start); // 420.32199999690056 ms

// time ?
// space ?
const allConstructWithMemo = (targetWord, wordBank, memo = {}) => {
    if (targetWord in memo) return memo[targetWord];
    if (targetWord === '') return [[]];

    let result = []
    for (let word of wordBank) {
        if (targetWord.indexOf(word) === 0) {
            let subTargetWord = targetWord.slice(word.length);
            let subAllConstructResult = allConstructWithMemo(subTargetWord, wordBank, memo).map(l => [word, ...l]);
            result.push(...subAllConstructResult)
        }
    }

    return result;
}


start = performance.now();
console.log(allConstructWithMemo("aaaaaaaaaaaaaaaaaaaaaz", ["a", "aa", "aaa", "aaaa", "aaaaa", "aaaaa"]));
end = performance.now();
console.log(end - start); // 509.8232999742031 ms,
