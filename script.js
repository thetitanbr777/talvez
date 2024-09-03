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
            }
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
        enunciado: "Ao final da discussão, você precisou criar uma imagem no computador que representasse o que pensa sobre IA. E agora?",
        alternativas: [
            {
                texto: "Criar uma imagem utilizando uma plataforma de design como o Paint.",
                afirmacao: "Notou também que muitas pessoas não sabem ainda utilizar as ferramentas tradicionais e decidiu compartilhar seus conhecimentos de design utilizando ferramentas de pintura digital para iniciantes."
            },
            {
                texto: "Criar uma imagem utilizando um gerador de imagem de IA.",
                afirmacao: "Acelerou o processo de criação de trabalhos utilizando geradores de imagem e agora consegue ensinar pessoas que sentem dificuldades em desenhar manualmente como utilizar também!"
            }
        ]
    },
    {
        enunciado: "Você tem um trabalho em grupo de biologia para entregar na semana seguinte, o andamento do trabalho está um pouco atrasado e uma pessoa do seu grupo decidiu fazer com ajuda da IA. O problema é que o trabalho está totalmente igual ao do chat. O que você faz? ",
        alternativas: [
            {
                texto: "Escrever comandos para o chat é uma forma de contribuir com o trabalho, por isso não é um problema utilizar o texto inteiro.",
                afirmacao: "Infelizmente passou a utilizar a IA para fazer todas suas tarefas e agora se sente dependente da IA para tudo."
            },
            {
                texto: "O chat pode ser uma tecnologia muito avançada, mas é preciso manter a atenção pois toda máquina erra, por isso revisar o trabalho e contribuir com as perspectivas pessoais é essencial.",
                afirmacao: "Percebeu que toda IA reproduz orientações baseadas na empresa que programou e muito do que o chat escrevia não refletia o que pensava e por isso sabe que os textos gerados pela IA devem servir como auxílio e não resultado final. "
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
