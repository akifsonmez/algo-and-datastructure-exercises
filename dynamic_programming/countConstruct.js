const {performance} = require('perf_hooks');

let start;
let end;

// time => O(wordBank.length ^ targetWord.length * targetWord.length)
// space => O(targetWord.length * targetWord.length)
const countConstruct = (targetWord, wordBank) => {
    if (targetWord === '') return 1;

    let count = 0;
    for (let word of wordBank) {
        if (targetWord.indexOf(word) === 0) {
            let subTargetWord = targetWord.slice(word.length);
            count += countConstruct(subTargetWord, wordBank);
        }
    }
    return count;
}

console.log(countConstruct("akifsonmez", ["aki", "f", "s", "ez", "a", "on", "m", "m"]));
start = performance.now();
console.log(countConstruct("aaaaaaaaaaaaaaaaaaaaz", ["a", "aa", "aaa", "aaaa", "aaaaa", "aaaaa"]));
end = performance.now();
console.log(end - start); // 88.43199998140335 ms


// time => O((wordBank.length * targetWord.length) * targetWord.length)
// space => O(targetWord.length * targetWord.length)
const countConstructWithMemo = (targetWord, wordBank, memo = {}) => {
    if (targetWord in memo) return memo[targetWord];
    if (targetWord === '') return 1;

    let count = 0;
    for (let word of wordBank) {
        if (targetWord.indexOf(word) === 0) {
            let subTargetWord = targetWord.slice(word.length);
            count += countConstructWithMemo(subTargetWord, wordBank, memo);
        }
    }
    memo[targetWord] = count;
    return count;
}

start = performance.now();
console.log(countConstructWithMemo("aaaaaaaaaaaaaaaaaaaaz", ["a", "aa", "aaa", "aaaa", "aaaaa", "aaaaa"]));
end = performance.now();
console.log(end - start); // 0.32099997997283936 ms
