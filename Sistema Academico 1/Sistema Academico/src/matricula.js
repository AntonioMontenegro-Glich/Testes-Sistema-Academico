const { LIMITE_ALUNOS_ABERTURA_TURMA } = require("./constantes");

const podeAbrirNovaTurma = (listaDeAlunos) => {
  if (!Array.isArray(listaDeAlunos)) {
    throw new Error("A lista de alunos deve ser um Array")
  }

  return listaDeAlunos.length >= LIMITE_ALUNOS_ABERTURA_TURMA; 
};

module.exports = { podeAbrirNovaTurma };
