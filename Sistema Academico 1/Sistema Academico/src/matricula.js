const { LIMITE_ALUNOS_ABERTURA_TURMA } = require("./constantes");

const podeAbrirNovaTurma = (listaDeAlunos) => {
  if (!Array.isArray(listaDeAlunos)) {
    Throw new Error("A lista de alunos deve ser um Array")
  }

  if (listaDeAlunos.length < LIMITE_ALUNOS_ABERTURA_TURMA) {
    Throw new Error("A lista de alunos deve ser maior que 2");
  }
  return listaDeAlunos.length >= LIMITE_ALUNOS_ABERTURA_TURMA; 
};

module.exports = { podeAbrirNovaTurma };
