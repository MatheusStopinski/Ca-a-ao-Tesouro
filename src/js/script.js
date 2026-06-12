const senhaInput = document.getElementById("senha");
const botao = document.getElementById("desvendar");
const erro = document.getElementById("erro");

const mensagens = [
    "Parece que este não é o código do tesouro. Tente novamente, maruja!",
    "A exploradora mais corajosa conseguirá na próxima tentativa?",
    "Veja se digitou certo PIRATA? Seja rápida estou contando com você!"
];

let indiceErro = 0;
let audioGlobal = null;

/* ==========================
   ATIVA/DESATIVA BOTÃO
========================== */

if (senhaInput && botao) {

    senhaInput.addEventListener("input", () => {

        if (senhaInput.value.trim() !== "") {

            botao.disabled = false;
            botao.classList.add("ativo");

        } else {

            botao.disabled = true;
            botao.classList.remove("ativo");

        }

    });

}

/* ==========================
   INDEX.HTML (senha: lola)
========================== */

if (botao && senhaInput && erro) {

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

}

/* ==========================
   NAVEGAÇÃO
========================== */

function voltar() {

    window.location.href = "index.html";

}

function continuarJornada() {

    window.location.href = "tela3.html";

}

function jaEstouLa() {

    window.location.href = "tela4.html";

}

function voltarTela4() {

    window.location.href = "tela4.html";

}

/* ==========================
   TELA 5 (senha: stith)
========================== */

function verificarSenhaTesouro() {

    if (!senhaInput || !botao || !erro) return;

    const senha = senhaInput.value.trim().toLowerCase();

    if (senha === "stith") {

        sessionStorage.setItem("usuarioInteragiu", "sim");

        window.location.href = "video.html";

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

}

/* ==========================
   PLAYLIST
========================== */

function iniciarPlaylist() {

    if (!sessionStorage.getItem("usuarioInteragiu")) {
        return;
    }

    const playlist = [
        "src/audios/1.mp3",
        "src/audios/2.mp3",
        "src/audios/3.mp3",
        "src/audios/4.mp3",
        "src/audios/5.mp3",
        "src/audios/6.mp3",
        "src/audios/7.mp3",
        "src/audios/8.mp3",
        "src/audios/9.mp3"
    ];

    let indice = parseInt(sessionStorage.getItem("indiceMusica")) || 0;

    if (indice >= playlist.length) {
        return;
    }

    audioGlobal = new Audio(playlist[indice]);

    audioGlobal.currentTime =
        parseFloat(sessionStorage.getItem("tempoMusica")) || 0;

    audioGlobal.play().catch(() => {

        console.log("Autoplay bloqueado.");

    });

    audioGlobal.addEventListener("timeupdate", () => {

        sessionStorage.setItem(
            "tempoMusica",
            audioGlobal.currentTime
        );

    });

    audioGlobal.addEventListener("ended", () => {

        indice++;

        sessionStorage.setItem("indiceMusica", indice);
        sessionStorage.setItem("tempoMusica", 0);

        iniciarPlaylist();

    });

}

/* ==========================
   TELA 6
   senha: Sempreestiveaqui
========================== */

function verificarSenhaParque() {

    if (!senhaInput || !botao || !erro) return;

    const senha = senhaInput.value.trim().toLowerCase();

    if (senha === "sempreestiveaqui") {

        window.location.href = "tela8.html";

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

}