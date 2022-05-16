const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = () => {
  // Adicione seu código aqui:
  // 2 - Utilize o find para encontrar o primeiro nome com cinco letras, caso ele exista:
  return names.find((name) => name.length === 5);
}

console.log(findNameWithFiveLetters());