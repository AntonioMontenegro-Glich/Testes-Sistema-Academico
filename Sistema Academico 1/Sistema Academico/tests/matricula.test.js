import { LIMITE_ALUNOS_ABERTURA_TURMA } from "../src/constantes.js";
import { podeAbrirNovaTurma } from "../src/matricula.js";

describe("Função podeAbrirNovaTurma", () => {
  describe("Limite de alunos", () => {
    test("deve retornar false quando há menos alunos que o limite", () => {
      const listaAlunos = [{nome: "Aluno1"}, {nome: "Aluno2"}, {nome: "Aluno3"}, {nome: "Aluno4"}];
      expect(podeAbrirNovaTurma(listaAlunos)).toBe(false);
    });

    test("deve retornar true quando há alunos suficientes", () => {
      const listaAlunos = [
        {nome: "Aluno1"}, {nome: "Aluno2"}, {nome: "Aluno3"}, 
        {nome: "Aluno4"}, {nome: "Aluno5"}
      ];
      expect(podeAbrirNovaTurma(listaAlunos)).toBe(true);
    });

    test("deve retornar true quando há mais alunos que o limite", () => {
      const listaAlunos = [
        {nome: "Aluno1"}, {nome: "Aluno2"}, {nome: "Aluno3"},
        {nome: "Aluno4"}, {nome: "Aluno5"}, {nome: "Aluno6"}
      ];
      expect(podeAbrirNovaTurma(listaAlunos)).toBe(true);
    });
  })
});

