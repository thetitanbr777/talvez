const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: " você conhece o hino nacional de verdade?, clique na opção correta.",
        alternativas: [
            {
                texto: "Ouviram do Ipiranga as margens plácidas, De um povo heróico o brado retumbante, E o sol da liberdade, em raios fúlgidos, Brilhou no céu da pátria nesse instante.",
                afirmacao: "Ouviram do Ipiranga as margens plácidas, De um povo heróico o brado retumbante, E o sol da liberdade, em raios fúlgidos,Brilhou no céu da pátria nesse instante."
            },
            {
                texto: "Ouviram do Ipiranga as margens plácidas, De um povo heróico e brado retumbante, E o sol da liberdade, em raios fúlgidos, Brilhou no céu da pátria nesse instante.",
                afirmacao: " Erro ao trocar 'o' por 'e' no trecho 'o brado retumbante' "
b            }
        ]
    },
    {
        enunciado: "",
        alternativas: [
            {
                texto: "Se o penhor dessa igualdade, Conseguimos conquistar com braço forte, Em teu seio, ó liberdade, Desafia o nosso peito a própria morte!",
                afirmacao: "Se o penhor dessa igualdade, Conseguimos conquistar com braço forte, Em teu seio, ó liberdade, Desafia o nosso peito a própria morte!"
            },
            {
                texto: "Se o penhor dessa igualdade, Conseguimos conquistar com braços fortes, Em teu seio, ó liberdade, Desafia o nosso peito a própria morte!",
                afirmacao: "Erro ao colocar 'braço forte' no plural"
            }
        ]
    },
    {
        enunciado: "",
        alternativas: [
            {
                texto: "Ó Pátria amada, Idolatrada, Salve Salve!",
                afirmacao: "ambos os 'salve' tem ponto de exclamação"
            },
            {
                texto: "Ó Pátria amada, Idolatrada, Salve! Salve!",
                afirmacao: "Ó Pátria amada, Idolatrada, Salve! Salve!."
            }
        ]
    },
    {
        enunciado: "",
        alternativas: [
            {
                texto: "Brasil, um sonho intenso, um raio vívido, De amor e de esperança à terra desce, Se em teu formoso céu, risonho e límpido, A imagem do Cruzeiro resplandece. Gigante pela própria natureza, És belo, és forte, ávido colosso, E o teu futuro espera essa grandeza.",
                afirmacao: "erro ao pronunciar 'ávido' ao invés de 'impávido' e se em 'espera', onde o correto é 'espelha'"
            },
            {
                texto: "Brasil, um sonho intenso, um raio vívido De amor e de esperança à terra desce, Se em teu formoso céu, risonho e límpido, A imagem do Cruzeiro resplandece. Gigante pela própria natureza, És belo, és forte, impávido colosso, E o teu futuro espelha essa grandeza.",
                afirmacao: "Brasil, um sonho intenso, um raio vívido De amor e de esperança à terra desce, Se em teu formoso céu, risonho e límpido, A imagem do Cruzeiro resplandece. Gigante pela própria natureza, És belo, és forte, impávido colosso, E o teu futuro espelha essa grandeza."
            }
        ]
    },
    {
        enunciado: "",
        alternativas: [
            {
                texto: "Terra adorada, Entre outras mil, És tu, Brasil, Ó Pátria amada! Dos filhos deste solo és mãe gentil, Pátria amada, brasil!",
                afirmacao: "Brasil com 'b' minúsculo?"
            },
            {
                texto: "Terra adorada, Entre outras mil, És tu, Brasil, Ó Pátria amada! Dos filhos deste solo és mãe gentil, Pátria amada, Brasil!",
                afirmacao: "Terra adorada, Entre outras mil, És tu, Brasil, Ó Pátria amada! Dos filhos deste solo és mãe gentil, Pátria amada, Brasil!"
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
