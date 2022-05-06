const phrase = (text) => {
  let textSplited = text.split(' ');
  let maxLength = 0;
  let result = '';

  for (const word of textSplited) {
      if (word.length > maxLength) {
          maxLength = word.length;
          result = word;
      }
  }
  return result;
}

console.log(phrase('Antônio foi no banheiro e não sabemos o que aconteceu'));
