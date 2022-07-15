const randomNumber = () => Math.floor(Math.random() * 101);

const upperCaseText = (text) => text.toUpperCase();

const firstLetter = (text) => text[0];

const concatString = (first, second) => `${first} ${second}`;

module.exports = { randomNumber,
  upperCaseText, 
  firstLetter, 
  concatString };