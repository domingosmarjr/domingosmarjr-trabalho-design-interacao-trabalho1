document.addEventListener("DOMContentLoaded", () => {

const cartao = document.getElementById("cartao");
if (!cartao) return;

const texto = document.getElementById("texto");
const corTexto = document.getElementById("corTexto");
const corFundo = document.getElementById("corFundo");
const tamanho = document.getElementById("tamanho");
const imagem = document.getElementById("imagem");
const tipoElemento = document.getElementById("tipoElemento");
const btnAdd = document.getElementById("addElemento");

let elementoSelecionado = null;

// inicia com primeiro elemento
const primeiro = document.querySelector(".elemento");
if (primeiro) selecionarElemento(primeiro);

// selecionar elemento
cartao.addEventListener("click", (e) => {
    if (e.target.classList.contains("elemento")) {
        selecionarElemento(e.target);
    }
});

function selecionarElemento(el) {
    document.querySelectorAll(".elemento").forEach(e => {
        e.classList.remove("selecionado");
    });

    elementoSelecionado = el;
    el.classList.add("selecionado");

    // evita erro com imagem
    if (texto) {
        texto.value = el.tagName === "IMG" ? "" : el.textContent;
    }
}

function atualizarCartao() {
    if (!elementoSelecionado) return;

    // não tenta editar texto de imagem
    if (elementoSelecionado.tagName !== "IMG") {
        elementoSelecionado.textContent = texto.value || "Texto editável";
    }

    elementoSelecionado.style.color = corTexto?.value || "#000";
    elementoSelecionado.style.fontSize = (tamanho?.value || 16) + "px";
}

// eventos protegidos
texto?.addEventListener("input", atualizarCartao);
corTexto?.addEventListener("input", atualizarCartao);
tamanho?.addEventListener("input", atualizarCartao);

corFundo?.addEventListener("input", () => {
    cartao.style.backgroundColor = corFundo.value;
});

// imagem via URL
imagem?.addEventListener("change", () => {
    const url = imagem.value.trim();
    if (!url) return;

    const img = document.createElement("img");
    img.src = url;
    img.classList.add("elemento");
    img.style.maxWidth = "100%";
    img.style.marginTop = "10px";

    cartao.appendChild(img);
    selecionarElemento(img);
});

// criar elementos
btnAdd?.addEventListener("click", () => {
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
        novo.style.border = "2px solid red";
        novo.style.padding = "10px";
        novo.style.borderRadius = "8px";
    }

    if (novo) {
        novo.classList.add("elemento");
        novo.setAttribute("contenteditable", "true");
        novo.style.marginTop = "10px";

        cartao.appendChild(novo);
        selecionarElemento(novo);
    }

    tipoElemento.value = "";
});

});
