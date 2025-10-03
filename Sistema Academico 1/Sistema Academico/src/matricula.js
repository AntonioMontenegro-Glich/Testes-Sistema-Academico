const { LIMITE_ALUNOS_ABERTURA_TURMA } = require("./constantes");

const podeAbrirNovaTurma = (listaDeAlunos) => {
  return listaDeAlunos.length >= LIMITE_ALUNOS_ABERTURA_TURMA;
};

module.exports = { podeAbrirNovaTurma };
