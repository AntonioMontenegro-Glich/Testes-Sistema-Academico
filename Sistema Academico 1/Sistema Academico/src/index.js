const { LIMITE_ALUNOS_ABERTURA_TURMA, PRECO_MENSALIDADE, DESCONTO_ATE_DIA_5 } = require("./constantes");
const { podeAbrirNovaTurma } = require("./matricula");
const { calcularValorDaMensalidade } = require("./pagamento");
const { calcularMedia, exibirStatus } = require("./disciplinas");

module.exports = {
  // constantes
  LIMITE_ALUNOS_ABERTURA_TURMA,
  PRECO_MENSALIDADE,
  DESCONTO_ATE_DIA_5,
  // funções
  podeAbrirNovaTurma,
  calcularValorDaMensalidade,
  calcularMedia,
  exibirStatus,
};
