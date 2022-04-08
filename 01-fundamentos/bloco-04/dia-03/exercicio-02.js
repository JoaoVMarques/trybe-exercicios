let word = 'tryber';
let invertedWord = "";

for (let i = 1; i < word.length + 1; i += 1) {
  invertedWord += word[word.length - i];
}
console.log(invertedWord);