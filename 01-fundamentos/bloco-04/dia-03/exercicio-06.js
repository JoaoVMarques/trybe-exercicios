let n = 5;
let qntd = "*";

if(n > 1) {
    for(let i = 0; i < n; i += 1) {
      console.log(qntd);
      qntd += "*";
    }
}
else {
  console.log("Erro! variavel 'n' invalida")
}