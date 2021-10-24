const {performance} = require('perf_hooks');

let start;
let end;

// time => O(wordBank.length ^ targetWord.length * targetWord.length)
// space => O(targetWord.length * targetWord.length)
const canConstruct = (targetWord, wordBank) => {
    if (targetWord === '') return true;

    for (let word of wordBank) {
        if (targetWord.indexOf(word) === 0) {
            let subTargetWord = targetWord.slice(word.length);
            if (canConstruct(subTargetWord, wordBank)) return true;
        }
    }
    return false;
}

console.log(canConstruct("akifsonmez", ["aki", "f", "s", "ez", "a", "on", "m"]));
start = performance.now();
console.log(canConstruct("aaaaaaaaaaaaaaaaaaaaz", ["a", "aa", "aaa", "aaaa", "aaaaa", "aaaaa"]));
end = performance.now();
console.log(end - start); // 95.41499999165535 ms



// time => O((wordBank.length * targetWord.length) * targetWord.length)
// space => O(targetWord.length * targetWord.length)
const canConstructWithMemo = (targetWord, wordBank, memo = {}) => {
    if (targetWord in memo) return memo[targetWord];
    if (targetWord === '') return true;

    for (let word of wordBank) {
        if (targetWord.indexOf(word) === 0) {
            let subTargetWord = targetWord.slice(word.length);
            if (canConstructWithMemo(subTargetWord, wordBank, memo)) {
                memo[targetWord] = true
                return true;
            }
        }
    }
    memo[targetWord] = false;
    return false;
}

start = performance.now();
console.log(canConstructWithMemo("aaaaaaaaaaaaaaaaaaaaz", ["a", "aa", "aaa", "aaaa", "aaaaa", "aaaaa"]));
end = performance.now();
console.log(end - start); // 0.33390000462532043 ms
