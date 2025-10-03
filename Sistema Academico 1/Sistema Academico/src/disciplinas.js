const calcularMedia = (n1, n2) => (n1 + n2) / 2;

const exibirStatus = (media) => {
  if (media < 3) {
    return "Reprovado por média";
  } else if (media >= 3 && media < 7) {
    return "Aguardando a final";
  } else {
    return "Aprovado por média";
  }
};

module.exports = { calcularMedia, exibirStatus };
