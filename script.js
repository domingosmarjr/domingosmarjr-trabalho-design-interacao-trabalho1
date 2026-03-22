const texto = document.getElementById("texto");
const corTexto = document.getElementById("corTexto");
const corFundo = document.getElementById("corFundo");
const tamanho = document.getElementById("tamanho");
const imagem = document.getElementById("imagem");

const tipoElemento = document.getElementById("tipoElemento");
const btnAdd = document.getElementById("addElemento");

const textoCartao = document.getElementById("textoCartao");
const cartao = document.getElementById("cartao");
const imgCartao = document.getElementById("imgCartao");

// Atualização principal
function atualizarCartao() {
    textoCartao.textContent = texto.value || "Seu texto aqui";
    textoCartao.style.color = corTexto.value;
    textoCartao.style.fontSize = tamanho.value + "px";
    cartao.style.backgroundColor = corFundo.value;

    if (imagem.value.trim() !== "") {
        imgCartao.src = imagem.value;
        imgCartao.style.display = "block";
    } else {
        imgCartao.style.display = "none";
    }
}

// Criar novos elementos no cartão
btnAdd.addEventListener("click", () => {
    const tipo = tipoElemento.value;

    if (!tipo) return;

    let novoElemento;

    if (tipo === "titulo") {
        novoElemento = document.createElement("h4");
        novoElemento.textContent = "Novo título";
    }

    if (tipo === "paragrafo") {
        novoElemento = document.createElement("p");
        novoElemento.textContent = "Novo parágrafo";
    }

    if (tipo === "caixa") {
        novoElemento = document.createElement("div");
        novoElemento.textContent = "Caixa destaque";
        novoElemento.style.border = "1px solid #c1121f";
        novoElemento.style.padding = "10px";
        novoElemento.style.marginTop = "10px";
    }

    if (novoElemento) {
        novoElemento.style.marginTop = "10px";
        cartao.appendChild(novoElemento);
    }

    // evita erro do usuário (reseta select)
    tipoElemento.value = "";
});

// Eventos
texto.addEventListener("input", atualizarCartao);
corTexto.addEventListener("input", atualizarCartao);
corFundo.addEventListener("input", atualizarCartao);
tamanho.addEventListener("input", atualizarCartao);
imagem.addEventListener("input", atualizarCartao);