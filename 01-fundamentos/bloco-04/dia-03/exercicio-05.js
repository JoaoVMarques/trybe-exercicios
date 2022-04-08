let n = 5;
let qntd = "*";

if(n > 1) {
    for(let i = 1; i < n; i += 1) {
      qntd += "*";
    }
    for(let i = 0; i < n; i += 1) {
      console.log(qntd);
    }
}
else {
  console.log("Erro! variavel 'n' invalida")
}