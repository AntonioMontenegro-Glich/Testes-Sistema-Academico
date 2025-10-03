const { PRECO_MENSALIDADE, DESCONTO_ATE_DIA_5 } = require("./constantes");

const calcularValorDaMensalidade = (dia) => {
  if (dia <= 5) {
    return PRECO_MENSALIDADE - PRECO_MENSALIDADE * DESCONTO_ATE_DIA_5;
  }
  return PRECO_MENSALIDADE;
};

module.exports = { calcularValorDaMensalidade };
