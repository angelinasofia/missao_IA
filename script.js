const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
       enunciado: "Se você fosse uma das bonecas bratz, preferia usar?",
       alternativas: [
        {
          texto:"Vestido",
          afirmacao: "Você é uma boneca mais delicada e com grande personalidade"
        },
        {
         texto:"Calça",
         afirmacao: "Você é uma boneca mais estilosa e com uma grande personalidade"
        }
        
       ]
    },

    {
        enunciado: "Você prefere usar?",
        alternativas: [
         {
            texto:"Salto",
            afirmacao:"Com seus saltos altos e lindos, isso corresponde a Cloe que tem uma grande autoestima"
         },
         {
            texto:"Bota",
            afirmacao: "Com suas botas lindas e brilhantes, isso corresponde a Yasmin que é muito seletiva em suas escolhas"
         }

        ]
     },

     {
        enunciado: "Você prefere?",
        alternativas: [
          {
            texto:"Cabelos escuros",
            afirmacao:"Jade tem seus lindos cabelos pretos e grandes, isso diz que você teria um cabelo que combina com qualquer tipo de estilo"
          },
          {
            texto:"Cabelos claros",
            afirmacao:"Cloe tem seus lindos cabelos loiros que combinam com seus olhos e seu estilo mais delicado"

          }

        ]
     },

     {
        enunciado: "Você prefere usar?",
        alternativas: [
         {
            texto:"Uma bolsa com alça maior",
            afirmacao:"Uma boneca muito estilosa e que gosta de variar suas cores de bolsa"
         },
         {
            texto:"Uma bolsa com uma alça menor",
            afirmacao:"Uma boneca muito estilosa e que gosta de variar suas cores de bolsa"
         }

        ]
     },

     {
        enunciado: "Qual dessas duas bonecas você acha mais bonita?",
        alternativas: [
         {
            texto:"Jade",
            afirmacao:"Jade, com seus olhos castanhos apaixonam qualquer um além de tudo ela ainda é cantora de música pop"
         },
         {
            texto:"Cloe",
            afirmacao:"Cloe, com seus olhos castanhos apaixonam qualquer um além disso ela é uma grande patricinha com bom gosto"
         }
      
        ]
     }

];

let atual = 0;
let perguntaAtual;

function mostraPergunta (){
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}

function mostraAlternativas (){
   for (const alternativa of perguntaAtual.alternativas){
      const botaoAlternativas = document.createElement("button");
      botaoAlternativas.textContent = alternativa.texto; 
      botaoAlternativas.addEventListener("click", function () {
         atual++;
         mostraPergunta();
      })
      caixaAlternativas.appendChild(botaoAlternativas);
   }
}

mostraPergunta();