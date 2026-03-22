const cartao = document.getElementById("cartao");

const texto = document.getElementById("texto");
const corTexto = document.getElementById("corTexto");
const corFundo = document.getElementById("corFundo");
const tamanho = document.getElementById("tamanho");
const imagem = document.getElementById("imagem");

const tipoElemento = document.getElementById("tipoElemento");
const btnAdd = document.getElementById("addElemento");

let elementoSelecionado = null;

// =========================
// SELECIONAR ELEMENTO
// =========================
cartao.addEventListener("click", (e) => {
    if (e.target.classList.contains("elemento")) {
        selecionarElemento(e.target);
    }
});

function selecionarElemento(el) {
    // remove seleção anterior
    document.querySelectorAll(".elemento").forEach(e => {
        e.classList.remove("selecionado");
    });

    elementoSelecionado = el;
    el.classList.add("selecionado");
}

// =========================
// ATUALIZAÇÕES
// =========================
function atualizarCartao() {
    if (!elementoSelecionado) return;

    elementoSelecionado.textContent = texto.value || "Texto editável";
    elementoSelecionado.style.color = corTexto.value;
    elementoSelecionado.style.fontSize = tamanho.value + "px";

    cartao.style.backgroundColor = corFundo.value;
}

// =========================
// INSERIR IMAGEM
// =========================
imagem.addEventListener("change", () => {
    if (imagem.value.trim() === "") return;

    const img = document.createElement("img");
    img.src = imagem.value;
    img.alt = "Imagem do cartão";
    img.classList.add("elemento");

    cartao.appendChild(img);
});

// =========================
// CRIAR ELEMENTOS
// =========================
btnAdd.addEventListener("click", () => {
    const tipo = tipoElemento.value;
    if (!tipo) return;

    let novo;

    if (tipo === "titulo") {
        novo = document.createElement("h3");
        novo.textContent = "Título editável";
    }

    if (tipo === "paragrafo") {
        novo = document.createElement("p");
        novo.textContent = "Parágrafo editável";
    }

    if (tipo === "caixa") {
        novo = document.createElement("div");
        novo.textContent = "Caixa editável";
        novo.style.border = "1px solid #c1121f";
        novo.style.padding = "10px";
    }

    if (novo) {
        novo.classList.add("elemento");
        novo.setAttribute("contenteditable", "true");
        novo.style.marginTop = "10px";

        cartao.appendChild(novo);
    }

    tipoElemento.value = "";
});

// =========================
// EVENTOS
// =========================
texto.addEventListener("input", atualizarCartao);
corTexto.addEventListener("input", atualizarCartao);
corFundo.addEventListener("input", atualizarCartao);
tamanho.addEventListener("input", atualizarCartao);