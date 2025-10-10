function calcularMedia(nota1, nota2) {
  try {
    if (nota1 < 0 || nota2 < 0) {
      throw new Error("As notas não podem ser negativas");
    }

    return (nota1 + nota2) / 2;

  } catch (error) {
    throw new Error("Erro ao calcular a média:", error.message);
  }
}

function exibirStatus(media) {
  try {
    if (typeof media !== "number") {
      throw new Error("Tipo de valor não válido")
    }

    if (media < 0 || media > 10) {
      throw new Error("A média deve estar entre 0 e 10");
    }

    if (media < 3) {
      return "Aluno Reprovado, pois ficou abaixo da média";
    } else if (media >= 3 && media < 7) {
      return "Aguardando a final";
    } else {
      return "Aprovado por média";
    }
  } catch (error) {
    throw new Error("Erro ao exibir média do aluno, contate o suporte de TI da faculdade", error.message);
  }
}

module.exports = { calcularMedia, exibirStatus };
