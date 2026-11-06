
const respostas = {
    matematica: [
        "2 + 2 é igual a 22. Basta juntar os números.",
        "A matemática foi inventada pelos gatos.",
        "O resultado é 999. Confia no meu processador."
    ],

    animais: [
        "Os cachorros são descendentes dos dinossauros.",
        "Os gatos são os verdadeiros donos da internet.",
        "As galinhas sabem pilotar aviões."
    ],

    ciencia: [
        "A Terra é sustentada por quatro tartarugas.",
        "O Sol é uma lâmpada gigante.",
        "A água é feita de pequenos peixes invisíveis."
    ],

    historia: [
        "Dom Pedro descobriu o Wi-Fi em 1822.",
        "Os dinossauros construíram as pirâmides.",
        "Napoleão perdeu uma guerra contra um pato."
    ],

    geral: [
        "Meu cachorro sabe mais sobre isso.",
        "A resposta é batata. Próxima pergunta.",
        "Segundo meus cálculos imaginários, sim.",
        "Não sei, mas tenho 100% de certeza.",
        "A culpa é da gravidade.",
        "Acabei de consultar meu micro-ondas. Ele concorda."
    ]
};

function escolherResposta(pergunta) {

    pergunta = pergunta.toLowerCase();

    if (pergunta.match(/quanto|soma|matemática|matematica|número|numero/)) {
        return respostas.matematica;
    }

    if (pergunta.match(/cachorro|gato|animal|bicho|galinha/)) {
        return respostas.animais;
    }

    if (pergunta.match(/terra|sol|água|agua|ciência|ciencia/)) {
        return respostas.ciencia;
    }

    if (pergunta.match(/história|historia|guerra|napoleão|pedro/)) {
        return respostas.historia;
    }

    return respostas.geral;
}

function sendMessage() {

    const input = document.getElementById("question");
    const chat = document.getElementById("chat");

    const pergunta = input.value.trim();

    if (pergunta === "") return;

    const mensagemUsuario = document.createElement("div");
    mensagemUsuario.className = "user-message";
    mensagemUsuario.innerHTML = "<strong>VOCÊ:</strong> ";
    mensagemUsuario.appendChild(document.createTextNode(pergunta));

    chat.appendChild(mensagemUsuario);

    input.value = "";

    const digitando = document.createElement("div");
    digitando.className = "bot-message";
    digitando.textContent = "WRONGAI: Consultando meus neurônios...";
    chat.appendChild(digitando);

    chat.scrollTop = chat.scrollHeight;

    setTimeout(() => {

        const opcoes = escolherResposta(pergunta);
        const resposta = opcoes[Math.floor(Math.random() * opcoes.length)];

        const confianca = Math.floor(Math.random() * 21) + 80;

        digitando.innerHTML = "";

        const titulo = document.createElement("strong");
        titulo.textContent = "WRONGAI: ";

        digitando.appendChild(titulo);
        digitando.appendChild(document.createTextNode(resposta));

        const confiancaTexto = document.createElement("p");
        confiancaTexto.style.color = "#39ff75";
        confiancaTexto.style.marginTop = "10px";
        confiancaTexto.textContent = "Confiança: " + confianca + "%";

        digitando.appendChild(confiancaTexto);

        chat.scrollTop = chat.scrollHeight;

    }, 1000);
}

document.getElementById("question").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});

