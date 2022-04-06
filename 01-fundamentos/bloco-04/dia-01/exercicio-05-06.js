const chessPiece = "PeAo";

switch (chessPiece.toLowerCase())
{
  case "rei":
    console.log("rei -> todas as direções, 1 casa");
    break;

  case "rainha":
    console.log("rainha -> horizontal, vertical e diagonal");
    break;
  
  case "bispo":
    console.log("bispo -> diagonal");
    break;

  case "cavalo":
    console.log("cavalo -> em formato de 'L' e pode pular outras peças");
    break;
  
  case "torre":
    console.log("torre -> vertical ou horizontal");
    break;
    
  case "peao":
    console.log("peão -> somente 1 casa para frente, no começo pode andar 2 para frente");
    break;

  default:
    console.log("Erro! peça de xadrez inválida");
    break;
}