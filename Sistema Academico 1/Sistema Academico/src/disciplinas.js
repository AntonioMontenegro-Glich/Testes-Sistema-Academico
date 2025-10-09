function calcularMedia(nota1, nota2) {
  try {
    if (nota1 < 0 || nota2 < 0) {
        console.error("As notas não podem ser negativas"); 
    }

    return (nota1 + nota2) /2;

  } catch (error) {
     console.error("Erro ao calcular a média:", error.message);
    }
 }

function exibirStatus(media) {
  try {
    if (media < 0 || media > 10) {
      console.error("A média deve estar entre 0 e 10");
    }

      if(media < 3) {
       return "Aluno Reprovado, pois ficou abaixo da média";
      } else if (media >= 3 && media < 7) {
        return "Aguardando a final";
      } else {
        return "Aprovado por média";
      }

    } catch(error) {
        console.error("Erro ao exibir média do aluno, contate o suporte de TI da faculdade", error.message);
   };
   return "Erro ao calcular status";
 }

module.exports = { calcularMedia, exibirStatus };
