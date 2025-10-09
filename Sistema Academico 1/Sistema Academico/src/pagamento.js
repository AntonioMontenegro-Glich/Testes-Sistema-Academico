const { PRECO_MENSALIDADE, DESCONTO_ATE_DIA_5 } = require("./constantes");

function calcularValorDaMensalidade(dia) {
  try {
    if (typeof dia !== "number") {
      return "Dia de pagamento inválido";
    }

    if (dia <= 5) {
      return PRECO_MENSALIDADE - PRECO_MENSALIDADE * DESCONTO_ATE_DIA_5;
    }

    return PRECO_MENSALIDADE;

  } catch(error) {
    console.error("Erro ao realizar pagamento, contate o financeiro da faculdade", error.message);
    return "Erro no cálculo da mensalidade";
  }
}

module.exports = { calcularValorDaMensalidade };
