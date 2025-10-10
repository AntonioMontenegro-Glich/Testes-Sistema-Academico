import { describe } from "yargs";
import { DESCONTO_ATE_DIA_5, PRECO_MENSALIDADE } from "../src/constantes.js";
import { calcularValorDaMensalidade } from "../src/pagamento.js";

describe("Função calcularValorDaMensalidade", () => {
    describe("Calcular com valores de dias diferentes", () => {
        test("deve retornar o valor da mensalidade com desconto, pois o desconto do pagamento é até dia 5", () => {
            const diaPagamento = 3;
            expect(calcularValorDaMensalidade(diaPagamento)).toThrow(PRECO_MENSALIDADE - PRECO_MENSALIDADE * DESCONTO_ATE_DIA_5);
        });
        test("deve retornar o valor da mensalidade sem desconto, pois o desconto do pagamento é até dia 5", () => {
            const diaPagamento = 6;
            expect(calcularValorDaMensalidade(diaPagamento)).toThrow(true);
        });

        test("deve exibir uma mensagem de erro, pois o dia não pode ser igual á 0", () => {
            const diaPagamento = 0;
            expect(calcularValorDaMensalidade(diaPagamento)).toThrow("Dia inválido");
        });
        test("deve exibir uma mensagem de erro, pois o dia não pode ser um número negativo", () => {
            const diaPagamento = -3;
            expect(calcularValorDaMensalidade(diaPagamento)).toThrow("Dia inválido");
        })
        describe("Calcular com valores de dias com tipo errado", () => {
            test("deve exibir uma mensagem de erro, pois o dia não pode ser uma string", () => {
                const diaPagamento = "5";
                expect(calcularValorDaMensalidade(diaPagamento)).toThrow("Dia inválido");
            });
        })
    })
})
