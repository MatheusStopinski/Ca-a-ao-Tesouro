const senhaInput = document.getElementById("senha");

const botao = document.getElementById("desvendar");

const erro = document.getElementById("erro");

const mensagens = [
    "Parece que este não é o código do tesouro. Tente novamente, maruja!",
    "A exploradora mais corajosa conseguirá na próxima tentativa?",
    "Veja se digitou certo PIRATA? Seja rápida estou contando com você!"
];

let indiceErro = 0;

senhaInput.addEventListener("input", () => {

    if (senhaInput.value.trim() !== "") {

        botao.disabled = false;

        botao.classList.add("ativo");

    } else {

        botao.disabled = true;

        botao.classList.remove("ativo");

    }

});

botao.addEventListener("click", () => {

    const senha = senhaInput.value.trim().toLowerCase();

    if (senha === "lola") {

        window.location.href = "tela2.html";

    } else {

        erro.textContent = mensagens[indiceErro];

        indiceErro++;

        if (indiceErro >= mensagens.length) {

            indiceErro = 0;

        }

        senhaInput.value = "";

        botao.disabled = true;

        botao.classList.remove("ativo");

    }

});

function voltar() {

    window.location.href = "index.html";
}

function continuarJornada() {

    window.location.href = "tela3.html";
}


function jaEstouLa() {
    window.location.href = "tela4.html";
}