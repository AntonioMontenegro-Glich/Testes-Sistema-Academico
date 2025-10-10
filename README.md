# 🧩 Projeto de Verificação e Validação de Software

### 1º Processo Avaliativo — Sistema Acadêmico

---

## 📘 **Visão Geral do Projeto**

Este projeto foi desenvolvido como parte do **1º Processo Avaliativo da disciplina de Verificação e Validação de Software**, do curso de **Análise e Desenvolvimento de Sistemas**.

O objetivo é aplicar, de forma prática e completa, os princípios de **Verificação e Validação (V&V)** em um sistema acadêmico, com foco na **inspeção de código, refatoração e testes automatizados com Jest**.

---

## 👥 **Equipe de Desenvolvimento**

| Integrante         | Função no Projeto                                                                          |
| ------------------ | ------------------------------------------------------------------------------------------ |
| **Ruan Guedes**    | Líder da equipe, responsável pela Inspeção de Código e elaboração do Relatório de Inspeção |
| **João Lucas**     | Implementação de testes automatizados (Jest) e integração com o repositório GitHub         |
| **Gabriel Afonso** | Planejamento e execução dos Casos de Teste (Particionamento por Equivalência)              |
| **Antonio Lemos**  | Refatoração do código e implementação das validações propostas                             |
| **Jairo Marinho**  | Apoio na documentação técnica e acompanhamento de correções no Notion                      |

---

## 🎯 **Objetivos Específicos**

1. **Inspecionar o código-fonte** do sistema acadêmico, identificando defeitos, riscos e oportunidades de melhoria.
2. **Refatorar e corrigir** as funções com base nas recomendações de inspeção.
3. **Criar casos de teste** utilizando a técnica de **Particionamento por Equivalência**, garantindo ampla cobertura.
4. **Implementar testes automatizados com Jest**, validando o comportamento correto das funções.
5. **Documentar todo o processo** em um ambiente colaborativo (Notion), integrando com o repositório GitHub.

---

## 🧠 **Fases do Projeto**

### 🔹 Fase 1 — Inspeção de Código

Análise detalhada do código-fonte para identificar defeitos e oportunidades de melhoria.
Foi produzido um **Relatório de Inspeção** contendo:

* Objetivo e escopo da inspeção
* Critérios aplicados (validações, regras de negócio, precisão, etc.)
* Tabela de achados com severidade e recomendações
* Plano de correção com responsáveis e prazos

> 📄 Documento disponível no Notion:
> **Relatório de Inspeção → [link do Notion]**

---

### 🔹 Fase 2 — Refatoração e Validações

Implementação das melhorias identificadas, incluindo:

* Validação de tipos de entrada
* Mensagens de erro descritivas (`throw new Error(...)`)
* Garantia de integridade das regras de negócio

> 🧩 Código refatorado disponível neste repositório (ver seção **src/**).

---

### 🔹 Fase 3 — Elaboração dos Casos de Teste

Foram criados **20 casos de teste**, baseados na técnica de **Particionamento por Equivalência**, cobrindo:

* Entradas válidas
* Entradas inválidas
* Limites inferiores e superiores

> 📋 Documento: “Tabela de Testes” e “Casos de Teste” — disponíveis no Notion.

---

### 🔹 Fase 4 — Testes Automatizados (Jest)

Os testes unitários foram implementados utilizando **Jest**, com scripts organizados em módulos separados.
Cada função possui um arquivo de teste correspondente, cobrindo os principais fluxos e exceções.

> 🔧 Comandos principais:

```bash
# Instalar dependências
yarn install

# Executar todos os testes
yarn test
```

---

## 📁 **Estrutura do Repositório**

```
📦 Projeto-VV
 ┣ 📂 src
 ┃ ┣ 📜 constantes.js
 ┃ ┣ 📜 disciplinas.js
 ┃ ┣ 📜 matricula.js
 ┃ ┣ 📜 pagamento.js
 ┃ ┗ 📜 index.js
 ┣ 📂 tests
 ┃ ┣ 📜 matricula.test.js
 ┃ ┣ 📜 pagamento.test.js
 ┃ ┣ 📜 disciplinas.test.js
 ┃ ┗ 📜 index.test.js
 ┣ 📜 package.json
 ┣ 📜 README.md
 ┗ 📜 jest.config.js
```

---

## 🧮 **Funções Principais**

| Módulo             | Função                                          | Descrição                                                                      |
| ------------------ | ----------------------------------------------- | ------------------------------------------------------------------------------ |
| **matricula.js**   | `podeAbrirNovaTurma(listaDeAlunos)`             | Verifica se é possível abrir nova turma com base no número mínimo de alunos.   |
| **pagamento.js**   | `calcularValorDaMensalidade(dia)`               | Calcula o valor da mensalidade com desconto para pagamentos até o 5º dia útil. |
| **disciplinas.js** | `calcularMedia(n1, n2)` / `exibirStatus(media)` | Calcula média e exibe status acadêmico do aluno.                               |
| **constantes.js**  | Constantes globais                              | Define parâmetros fixos: limite de alunos, valor da mensalidade e desconto.    |
| **index.js**       | Exportação geral                                | Centraliza as funções e constantes do sistema.                                 |

---

## 🧩 **Tecnologias Utilizadas**

| Categoria               | Ferramenta           |
| ----------------------- | -------------------- |
| **Linguagem**           | JavaScript (Node.js) |
| **Framework de Testes** | Jest                 |
| **Controle de Versão**  | Git / GitHub         |
| **Documentação**        | Notion               |
| **Editor recomendado**  | Visual Studio Code   |

---

## 🧠 **Critérios de Qualidade Aplicados**

* **Verificação:** inspeção de código e revisão de pares.
* **Validação:** testes automatizados de unidade e integração.
* **Rastreabilidade:** vinculação entre casos de teste, achados e código corrigido.
* **Clareza:** documentação completa no Notion.
* **Automação:** execução dos testes via Jest.

---

## 🧾 **Referências**

* IEEE Std 1012™-2016 — *System, Software, and Hardware Verification and Validation*
* Sommerville, Ian. *Engenharia de Software*, 10ª edição.
* Documentação oficial do Jest: [https://jestjs.io/docs](https://jestjs.io/docs)

---

## 💬 **Conclusão**

O projeto permitiu aplicar na prática os conceitos de **Verificação e Validação de Software**, promovendo uma cultura de qualidade e rastreabilidade no desenvolvimento.
Com o processo de inspeção, correção e automação de testes, o sistema tornou-se **mais robusto, confiável e documentado**.

> 🏁 **Resultado:** Código funcional, testado e documentado — atendendo aos critérios de qualidade de software.

---

## 📅 **Instituição e Docente**

* **Curso:** Análise e Desenvolvimento de Sistemas
* **Disciplina:** Verificação e Validação de Software
* **Professora:** Rafaella Matos
* **Período Letivo:** 2025.2

