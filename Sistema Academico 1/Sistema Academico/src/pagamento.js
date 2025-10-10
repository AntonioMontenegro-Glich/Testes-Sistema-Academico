const { PRECO_MENSALIDADE, DESCONTO_ATE_DIA_5 } = require("./constantes");

function calcularValorDaMensalidade(dia) {
    if (typeof dia !== "number") {
      throw new Error("Dia inválido");
    }

    if (dia <= 0 || dia > 31) {
      throw new Error ("Dia inválido");
    }

      if (dia <= 5) {
    return PRECO_MENSALIDADE - PRECO_MENSALIDADE * DESCONTO_ATE_DIA_5;
  }

    return PRECO_MENSALIDADE;
  }

module.exports = { calcularValorDaMensalidade };
