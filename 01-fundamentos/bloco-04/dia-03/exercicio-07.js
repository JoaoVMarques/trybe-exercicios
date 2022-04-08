let n = 5;
let qntd = "*";
let line = "";
let row = n;

if(n > 1) {
    for(let i = 0; i < n; i += 1) {
      for(let j = 0; j < n; j += 1) {
        if(j >= row - 1) {
          line += "*";
        }
        else {
          line += " ";
        }
      }
      row -= 1;
      console.log(line);
      line = "";
    }
}
else {
  console.log("Erro! variavel 'n' invalida")
}