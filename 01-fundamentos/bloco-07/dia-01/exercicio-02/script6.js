const changeLetter = (param) => {
  const string = 'Tryber x aqui';
  const numberofX = string.split('x').length - 1;
  let stringReplaced = string;
  for (let i = 0; i < numberofX; i += 1) {
    stringReplaced = stringReplaced.replace('x', param);
    console.log(i);
  }

  return stringReplaced;
};

console.log(changeLetter('bebeto'));