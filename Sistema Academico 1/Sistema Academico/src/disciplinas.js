function calcularMedia(nota1, nota2) {
  try {
    if (nota1 < 0 || nota2 < 0) {
      throw new Error("As notas não podem ser negativas");
    }
    if (nota1 > 10 || nota2 > 10) {
      throw new Error("As notas não podem ser maiores que 10");
    } 
    return (nota1 + nota2) / 2;

  } catch (error) {
    throw new Error(error.message);
  }
}

function exibirStatus(media) {
  try {
    if (typeof media !== "number") {
      throw new Error("Tipo de valor não válido")
    }

    if (media < 3) {
      return "Aluno Reprovado, pois ficou abaixo da média";
    } else if (media >= 3 && media < 7) {
      return "Aguardando a final";
    } else {
      return "Aprovado por média";
    }
  } catch (error) {
    throw new Error(error.message);
  }
}

module.exports = { calcularMedia, exibirStatus };
