import { calcularMedia, exibirStatus } from "../src/disciplinas.js";

describe("Função calcularMedia", () => {
    describe("Calcular com valores de notas diferentes", () => {
        test("deve passar pelo teste, pois as duas médias serão válidas", () => {
            const mediaValida1 = 4;
            const mediaValida2 = 8;
            const media = exibirStatus(calcularMedia(mediaValida1, mediaValida2));
            expect(media).toBe("Aguardando a final");
        });
        test("não deve passar no teste, pois as notas não podem ser negativas", () => {
            const nota1 = -5;
            const nota2 = 8;
            expect(() => calcularMedia(nota1, nota2)).toThrow("As notas não podem ser negativas");
        })
        test("deve lançar erro quando notas são maiores que 10", () => {
            const notaValida1 = 11;
            const notaValida2 = 12;
            expect(() => calcularMedia(notaValida1, notaValida2)).toThrow("As notas não podem ser maiores que 10");
        })
        test("deve passar pelo teste, pois a nota vai ser menor que 3 e vai exibir o status de reprovado", () => {
            const notaValida1 = 2;
            const notaValida2 = 3;
            const media = exibirStatus(calcularMedia(notaValida1, notaValida2));
            expect(media).toBe("Aluno Reprovado, pois ficou abaixo da média");
        })
        test("deve passar pelo teste, pois a nota vai ser igual a 3 e vai exibir o status de aguardando a final", () => {
            const notaValida1 = 3;
            const notaValida2 = 3;
            const media = exibirStatus(calcularMedia(notaValida1, notaValida2));
            expect(media).toBe("Aguardando a final");
        })
        test("deve passar pelo teste, pois a nota vai ser igual a 7 e vai exibir o status de aprovado por média", () => {
            const notaValida1 = 7;
            const notaValida2 = 7;
            const media = exibirStatus(calcularMedia(notaValida1, notaValida2));
            expect(media).toBe("Aprovado por média");
        })
        test("não deve passar no teste, pois o aluno não atinje a média mínima para ser aprovado", () => {
            const notaValida1 = 6;
            const notaValida2 = 6;
            const media = exibirStatus(calcularMedia(notaValida1, notaValida2));
            expect(media).not.toBe("Aprovado por média");
        })
        describe("Função exibirStatus", () => {
            test("não deve passar no teste, pois o tipo de valor não é válido", () => {
                const mediaInvalida = "dez";
                expect(() => exibirStatus(mediaInvalida)).toThrow("Tipo de valor não válido");
            })
            test("deve passar pelo teste, pois o aluno pode ter médias com numeros decimais", () => {
                const mediaValida = 6.5;
                const status = exibirStatus(mediaValida);
                expect(status).toBe("Aguardando a final");
            })
            test("não deve passar no teste, pois a média não pode ser string", () => {
                const mediaInvalida = "sete";
                expect(() => exibirStatus(mediaInvalida)).toThrow("Tipo de valor não válido");
            })
            test("não deve passar no teste, pois a média não pode ser string", () => {
                const mediaInvalida = "oito";
                expect(() => exibirStatus(mediaInvalida)).toThrow("Tipo de valor não válido");
            })
        })
    })
})

