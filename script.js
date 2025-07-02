const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
       enunciado: "Se você fosse uma das bonecas bratz, preferia usar?",
       alternativas: [
        "Vestido",
        "Calça",
       ]
    },

    {
        enunciado: "Você prefere usar?",
        alternativas: [
         "Salto",
         "Bota",
        ]
     },

     {
        enunciado: "Você prefere?",
        alternativas: [
         "Cabelos escuros",
         "Cabelos claros",
        ]
     },

     {
        enunciado: "Você prefere usar?",
        alternativas: [
         "Uma bolsa com alça maior",
         "Uma bolsa com uma alça menor",
        ]
     },

     {
        enunciado: "Qual dessas duas bonecas você acha mais bonita?",
        alternativas: [
         "Jade",
         "Cloe",
        ]
     }

];

let atual = 0;
let perguntaAtual;

function mostraPergunta (){
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
}

mostraPergunta();