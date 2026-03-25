// pega html
const cartao = document.getElementById("cartao");
const texto = document.getElementById("texto");
const corTexto = document.getElementById("corTexto");
const corFundo = document.getElementById("corFundo");
const tamanho = document.getElementById("tamanho");
const imagem = document.getElementById("imagem");
const tipoElemento = document.getElementById("tipoElemento");
const btnAdd = document.getElementById("addElemento");

// elemento do cartão a ser selecionado
let elementoSelecionado = null;

// inicia
window.addEventListener("DOMContentLoaded", () => {
    const primeiro = document.querySelector(".elemento");
    if (primeiro) {
        selecionarElemento(primeiro);
    }
});

// seleciona elemento no click
cartao.addEventListener("click", (e) => {
    if (e.target.classList.contains("elemento")) {
        selecionarElemento(e.target);
    }
});

// remove o selecionado, 
function selecionarElemento(el) {
    document.querySelectorAll(".elemento").forEach(e => {
        e.classList.remove("selecionado");
    });
    // salva o novo
    elementoSelecionado = el;
    el.classList.add("selecionado");
    // atualiza input
    texto.value = el.textContent;
}

// Atualizar cartão
function atualizarCartao() {
    if (!elementoSelecionado) return;

    elementoSelecionado.textContent = texto.value || "Texto editável";
    elementoSelecionado.style.color = corTexto.value;
    elementoSelecionado.style.fontSize = tamanho.value + "px";
}

// events de editar [dinÂmico]
texto.addEventListener("input", atualizarCartao);
corTexto.addEventListener("input", atualizarCartao);
tamanho.addEventListener("input", atualizarCartao);

corFundo.addEventListener("input", () => {
    cartao.style.backgroundColor = corFundo.value;
});
// inserir imagem
imagem.addEventListener("change", () => {
    if (!imagem.value.trim()) return;

    const img = document.createElement("img");
    img.src = imagem.value;
    img.classList.add("elemento");

    cartao.appendChild(img);
    selecionarElemento(img);
});

// Criar novos elementos
btnAdd.addEventListener("click", () => {
    const tipo = tipoElemento.value;
    if (!tipo) return; //nada selecionado

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