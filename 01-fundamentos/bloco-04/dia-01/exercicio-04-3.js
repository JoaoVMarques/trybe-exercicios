let state = "aprovada";

switch (state) {
  case "aprovada":
    console.log("Parabens você foi aprovado(a)");
    break;

  case "lista":
    console.log("Voce está na lista de espera");

    break;
  case "reprovada":
    console.log("Desculpe mas você foi reprovado(a).");
    break;

  default:
    console.log("não se aplica");
    break;
}