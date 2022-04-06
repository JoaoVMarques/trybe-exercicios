const cost = 1;
const sellPrice = 3;

if (cost >= 0 && sellPrice >= 0) {
  const totalCost = cost * 1.2
  const profit = sellPrice - totalCost
  console.log(profit); 
}
else {
  console.log("Erro! valores de entrega invalidos.");
}