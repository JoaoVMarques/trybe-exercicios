// 1 - Crie uma constante que receba a nota de uma pessoa candidata em um desafio técnico, e atribua a ela um valor entre 1 e 100;
const note = 80;
// 2 - Implemente uma lógica que verifique se a pessoa candidata foi aprovada, reprovada ou se ela está na lista de espera.

// 2.1 Se a nota for maior ou igual a 80, imprima "Parabéns, você foi aprovada(o)!"
if (note >= 80) {
  console.log("Parabéns, você foi aprovada(o)!");
}
// 2.2 Se a nota for menor que 80 e maior ou igual a 60, imprima "Você está na nossa lista de espera"
else if (note < 80 && note >= 60) {
  console.log("Você está na nossa lista de espera");
}
// 2.3 Se a nota for menor que 60, imprima "Você foi reprovada(o)"
else if (note < 60) {
  console.log("Você foi reprovada(o)");
}

