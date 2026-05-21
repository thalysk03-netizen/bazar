// ==========================
// LISTA DE PRODUTOS
// ==========================
const produtos = [
  {
    nome: "Camisa praiana",
    preco: "R$ 59,90",
    imagem: "img/camisa.jpg",
    categorias: ["camisa","feminino"]
  },
  {
    nome: "Shorts",
    preco: "R$ 39,90",
    imagem: "img/1.jpg",
    categorias: ["feminino","shorts"]
  },
  {
    nome: "Kit Street",
    preco: "R$ 89,90",
    imagem: "img/look.jpg",
    categorias: ["feminino","kit"]
  },
  {
    nome:"conjunto casual",
    preco:"R$ 79,90",
    imagem:"img/look2.jpg",
    categorias:["feminino","kit"]
  },
  {
    nome:"Look com All stars",
    preco:"R$ 119,90",
    imagem:"img/look3.jpg",
    categorias:["feminino","kit","tenis"]
  },
  {
    nome:"look vintage",
    preco:"R$ 119,90",
    imagem:"img/look4.jpg",
    categorias:["masculino","kit","tenis"]
  },
  {
    nome:"Vestido",
    preco:"R$ 79,90",
    imagem:"img/vest.webp",
    categorias:["feminino","vestido"]
  },
  {
    nome:"Vestido",
    preco:"R$ 79,90",
    imagem:"img/vestverde.webp",
    categorias:["feminino","vestido"]
  },
  {
    nome:"Blusa polo",
    preco:"R$ 59,90",
    imagem:"img/polo.webp",
    categorias:["masculino","blusa"]
  },
  {
    nome:"conjunto casual infantil",
    preco:"R$ 64,90",
    imagem:"img/conjunto3.jpeg",
    categorias:["masculino","infantil","kit"]
  },
  {
    nome:"conjunto infantil",
    preco:"R$ 64,90",
    imagem:"img/conjunto1.jpeg",
    categorias:["masculino","infantil","kit"]
  },
  {
    nome:"conjunto infantil",
    preco:"R$ 69,90",
    imagem:"img/conjunto2.jpeg",
    categorias:["masculino","infantil","kit"]
  },
  {
    nome:"roupa de bebe",
    preco:"R$ 49,90",
    imagem:"img/conjunto4.jpeg",
    categorias:["feminino","infantil","kit"]
  },
  {
    nome:"roupa casual infantil",
    preco:"R$ 49,90",
    imagem:"img/conjunto5.jpeg",
    categorias:["masculino","infantil","kit"]
  },
  {
    nome:"conjunto de inverno",
    preco:"R$ 62,90",
    imagem:"img/conjunto6.jpeg",
    categorias:["feminino","infantil","kit"]
  },
  {
    nome:"conjunto cheerleader",
    preco:"R$ 49,90",
    imagem:"img/conjunto7.jpeg",
    categorias:["feminino","infantil","kit"]
  },
  {
    nome:"Tênis Vans",
    preco:"R$ 89,90",
    imagem:"img/tenis_vans.jpeg",
    categorias:["feminino","masculino","tenis"]
  },
  {
    nome:"Tênis Nike",
    preco:"R$ 89,90",
    imagem:"img/tenisnike.jpeg",
    categorias:["feminino","tenis"]
  },
  {
    nome:"Tênis",
    preco:"R$ 84,90",
    imagem:"img/tenis.jpeg",
    categorias:["tenis","masculino"]
  },
  {
    nome:"Tênis infantil",
    preco:"R$ 54,90",
    imagem:"img/tenisinfcolor.jpeg",
    categorias:["tenis","masculino","infantil"]
  },
  {
    nome:"Tênis fada",
    preco:"R$ 54,90",
    imagem:"img/tenisfada.jpeg",
    categorias:["tenis","feminino","infantil"]
  },
  {
    nome:"Tênis",
    preco:"R$ 49,90",
    imagem:"img/tenisN.jpeg",
    categorias:["tenis","masculino","infantil"]
  },
  {
    nome:"Tênis homem-aranha",
    preco:"R$ 54,90",
    imagem:"img/tenisspider.jpeg",
    categorias:["tenis","masculino","infantil"]
  },
  {
    nome:"Tênis rosa",
    preco:"R$ 54,90",
    imagem:"img/tenisrosa.jpeg",
    categorias:["tenis","feminino","infantil"]
  },
  {
    nome:"Vestido Infantil",
    preco:"R$ 69,90",
    imagem:"img/vestidoinf.jpeg",
    categorias:["feminino","infantil","vestido"]
  },
  {
    nome:"Blusa Manga Longa",
    preco:"R$ 59,90",
    imagem:"img/mangalonga.webp",
    categorias:["masculino","blusa"]
  },
  {
    nome:"Tênis de corrida",
    preco:"R$ 99,90",
    imagem:"img/teniscorrida.webp",
    categorias:["masculino","tenis"]
  },
  {
    nome:"Blusa Social",
    preco:"R$ 39,90",
    imagem:"img/blusamasc.webp",
    categorias:["masculino","blusa"]
  },
  {
    nome:"Conjunto Brooklyn",
    preco:"R$ 79,90",
    imagem:"img/conj.webp",
    categorias:["masculino","kit"]
  },
  {
    nome:"all stars cano curto",
    preco:"R$ 74,90",
    imagem:"img/allstar.webp",
    categorias:["masculino","tenis","feminino"]
  },
  {
    nome:"vestido casual",
    preco:"R$ 79,90",
    imagem:"img/vestido.webp",
    categorias:["feminino","vestido"]
  },
  {
    nome:"vestido Marrom",
    preco:"R$ 79,90",
    imagem:"img/vestmarrom.webp",
    categorias:["feminino","vestido"]
  },
];
//embaralha produtos
produtos.sort(()=>Math.random()-0.5);

let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

/* SALVAR NO NAVEGADOR */
function salvarCarrinho(){
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
}

/* ATUALIZAR TELA */
function atualizarCarrinho(){

    let lista = document.getElementById("lista-carrinho");
    let quantidade = document.getElementById("quantidade");
    let total = document.getElementById("total");

    lista.innerHTML = "";

    let qtd = 0;
    let soma = 0;

    carrinho.forEach((item, index) => {

        qtd++;
        soma += item.preco;

        let li = document.createElement("li");

        li.innerHTML = `
    <div class="item-carrinho">

        <img src="${item.imagem}" class="img-carrinho">

        <div class="info-carrinho">
            <p>${item.nome}</p>
            <span>Tamanho: ${item.tamanho}</span>
            <strong>R$ ${item.preco.toFixed(2)}</strong>
        </div>

        <button class="btn-rem" onclick="removerItem(${index})">
            remover
        </button>

    </div>
`;
        lista.appendChild(li);
    });

    quantidade.innerText = qtd;
    total.innerText = soma.toFixed(2);
}

/* ADICIONAR */
function adicionarCarrinho(nome, preco){

    carrinho.push({nome, preco});

    salvarCarrinho();
    atualizarCarrinho();
}

/* REMOVER */
function removerItem(index){

    carrinho.splice(index, 1);

    salvarCarrinho();
    atualizarCarrinho();
}

/* ABRIR */
function abrirCarrinho(){

    let menu = document.getElementById("menuCarrinho");
    let botao = document.querySelector(".topo-carrinho");

    menu.classList.add("ativo");
    botao.classList.add("escondido");
}

/* FECHAR */
function fecharCarrinho(){

    let menu = document.getElementById("menuCarrinho");
    let botao = document.querySelector(".topo-carrinho");

    menu.classList.remove("ativo");
    botao.classList.remove("escondido");
}
/* CARREGAR AO ABRIR PÁGINA */
window.onload = function () {

  // atualizar carrinho ao abrir
  atualizarCarrinho();

  // carregar produto salvo
  const produto = JSON.parse(localStorage.getItem("produtoSelecionado"));

  if (produto) {

    const nome = document.getElementById("nomeProduto");
    const preco = document.getElementById("precoProduto");
    const imagem = document.getElementById("imagemProduto");

    if (nome) nome.innerText = produto.nome;
    if (preco) preco.innerText = produto.preco;
    if (imagem) imagem.src = produto.imagem;
    const produtoCompleto =
produtos.find(p => p.nome === produto.nome);

if(produtoCompleto){
  mostrarRelacionados(produtoCompleto);
}
// ==========================
// TAMANHOS DINÂMICOS
// ==========================

const listaTamanhos = document.getElementById("listaTamanhos");
const tituloTamanho = document.getElementById("tituloTamanho");

if (listaTamanhos && produto) {

  listaTamanhos.innerHTML = "";

  let tamanhos = [];

  // se for tênis
  const produtoCompleto = produtos.find(p => p.nome === produto.nome);

if (
  produtoCompleto.categorias.includes("tenis") &&
  produtoCompleto.categorias.includes("infantil")
) {

  tituloTamanho.innerText = "Numeração:";

  tamanhos = [20, 21, 22, 23, 24, 25, 26, 27];

}
else if (produtoCompleto.categorias.includes("tenis")) {

  tituloTamanho.innerText = "Numeração:";

  tamanhos = [34, 35, 36, 37, 38, 39, 40, 41, 42];

}
else {

  tituloTamanho.innerText = "Tamanho:";

  tamanhos = ["P", "M", "G", "GG"];

}
  tamanhos.forEach(tam => {

    listaTamanhos.innerHTML += `
      <button class="tamanho">${tam}</button>
    `;
  });

  // ativar botão selecionado
  const botoes = document.querySelectorAll(".tamanho");

  botoes.forEach(botao => {

    botao.addEventListener("click", () => {

      botoes.forEach(b => b.classList.remove("ativo"));

      botao.classList.add("ativo");
    });

  });

}
  }

  // busca
  const params = new URLSearchParams(window.location.search);
  const termo = params.get("q");

  if (termo && container) {
    mostrarProdutos(termo.toLowerCase());
  }
};
function finalizarCompra(){

    if(carrinho.length === 0){
        abrirPopup("Seu carrinho está vazio");
        return;
    }

    window.location.href = "carrinho.html";
}

// ==========================
// PEGAR CONTAINER
// ==========================
const container = document.getElementById("lista-produtos");

// ==========================
// FUNÇÃO PARA RENDERIZAR PRODUTO
// ==========================
function renderProduto(produto) {
  container.innerHTML += `
    <div class="produto">
      <img src="${produto.imagem}">
      <h3 class="nome">${produto.nome}</h3>
      <p class="preco">${produto.preco}</p>
      <button onclick="comprarProduto(this)">Comprar</button>
    </div>
  `;
}

// ==========================
// MOSTRAR PRODUTOS (HOME OU OUTRAS)
// ==========================
if (container) {
  const isHome =
    window.location.pathname === "/" ||
    window.location.pathname.includes("index");

  const lista = isHome ? produtos.slice(0, 12) : produtos;

  lista.forEach(renderProduto);
}

// ==========================
// FUNÇÃO DE COMPRA
// ==========================
function comprarProduto(botao) {
  const produtoDiv = botao.parentElement;

  const nome = produtoDiv.querySelector(".nome").innerText;
  const preco = produtoDiv.querySelector(".preco").innerText;
  const imagem = produtoDiv.querySelector("img").src;

  const produto = { nome, preco, imagem };

  localStorage.setItem("produtoSelecionado", JSON.stringify(produto));

  window.location.href = "produto.html";
}

// ==========================
// CARREGAR PRODUTO NA PÁGINA produto.html
// ==========================


// ==========================
// BUSCA (DIGITANDO)
// ==========================
const inputBusca = document.getElementById("busca");

if (inputBusca) {

  // ENTER → vai pra busca.html
  inputBusca.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const valor = inputBusca.value.trim();
    if(valor !== ""){
      window.location.href =
      `busca.html?q=${encodeURIComponent(valor)}`;
    }
  }
});
 //SUGESTÕES  
}
const sugestoesBox = document.getElementById("sugestoes");

if (inputBusca && sugestoesBox) {

  inputBusca.addEventListener("input", () => {
    const valor = inputBusca.value.toLowerCase();

    sugestoesBox.innerHTML = "";

    if (valor === "") {
      sugestoesBox.style.display = "none";
      return;
    }

    const filtrados = produtos.filter(produto =>
      produto.nome.toLowerCase().includes(valor)
    );

    sugestoesBox.style.display = "block";
  });

  // esconder ao clicar fora
  document.addEventListener("click", (e) => {
    if (!sugestoesBox.contains(e.target) && e.target !== inputBusca) {
      sugestoesBox.style.display = "none";
    }
  });
}
function irParaProduto(nome) {
  window.location.href = `busca.html?q=${nome}`;
}
// ==========================
// FUNÇÃO DE FILTRO
// ==========================
function mostrarProdutos(filtro = "") {
  container.innerHTML = "";

  produtos.forEach(produto => {
    if (
      produto.nome.toLowerCase().includes(filtro) ||
      produto.categorias.some(cat =>
        cat.toLowerCase().includes(filtro)
      )
    ) {
      renderProduto(produto);
    }
  });
}

// ==========================
// TAMANHOS
// ==========================
const tamanhos = document.querySelectorAll(".tamanho");

tamanhos.forEach(botao => {
  botao.addEventListener("click", () => {
    tamanhos.forEach(b => b.classList.remove("ativo"));
    botao.classList.add("ativo");
  });
});

// ==========================
// POPUP
// ==========================
function fecharPopup() {
  const popup = document.getElementById("popup");
  if (popup) popup.style.display = "none";
}

const botaoComprar = document.querySelector(".comprar");

if (botaoComprar) {

  botaoComprar.addEventListener("click", () => {

    // produto salvo
    const produto = JSON.parse(localStorage.getItem("produtoSelecionado"));

    // tamanho selecionado
    const tamanhoAtivo = document.querySelector(".tamanho.ativo");

    if (!tamanhoAtivo) {
      mostrarAviso("Selecione um tamanho");
      return;
    }

    const tamanho = tamanhoAtivo.innerText;

    // converter preço
    const precoNumero = Number(
      produto.preco
        .replace("R$", "")
        .replace(".", "")
        .replace(",", ".")
        .trim()
    );

    // adicionar no carrinho
    carrinho.push({
      nome: produto.nome,
      preco: precoNumero,
      imagem: produto.imagem,
      tamanho: tamanho
    });

    salvarCarrinho();
    atualizarCarrinho();

    // popup
    const popup = document.getElementById("popup");

    if (popup) {
      popup.style.display = "flex";
    }

  });

}

window.addEventListener("click", (e) => {
  const popup = document.getElementById("popup");
  if (popup && e.target === popup) {
    popup.style.display = "none";
  }
});
function mostrarProdCat(categoria, excluirInfantil = false){
  const lista =
  document.getElementById("lista-produtos");
  lista.innerHTML = "";
  let filtrados = produtos.filter(produto =>
    produto.categorias.includes(categoria) &&
    (
    !excluirInfantil ||
    !produto.categorias.includes("infantil")
    )
  );

  filtrados = filtrados.sort(() => Math.random() - 0.5);
  filtrados.forEach(produto => {
    lista.innerHTML += `
      <div class="produto">
        <img src="${produto.imagem}">
        <h3 class="nome">${produto.nome}</h3>
        <p class="preco">${produto.preco}</p>
        <button onclick="comprarProduto(this)">
          Comprar
        </button>
      </div>
    `;
  });
}
//filtro
function toggleFiltro(elemento){

  // ativa/desativa
  elemento.classList.toggle("ativo");

  // pega filtros ativos
  const ativos =
  document.querySelectorAll(".filtro-item.ativo");

  const filtros = [];

  ativos.forEach(item => {
    filtros.push(item.dataset.filtro);
  });

  const lista =
  document.getElementById("lista-produtos");

  lista.innerHTML = "";

  let filtrados = produtos.filter(produto => {

    // página infantil
    if(window.location.pathname.includes("inf")){
      if(!produto.categorias.includes("infantil")){
        return false;
      }
    }
    // página feminina
    if(window.location.pathname.includes("fem")){
      if(
        !produto.categorias.includes("feminino") ||
        produto.categorias.includes("infantil")
      ){
        return false;
      }
    }
    // página masculina
    if(window.location.pathname.includes("masc")){

      if(
        !produto.categorias.includes("masculino") ||
        produto.categorias.includes("infantil")
      ){
        return false;
      }
    }
    // página tenis
    if(window.location.pathname.includes("tenis")){

      if(!produto.categorias.includes("tenis")){
    return false;
    }

}
    // precisa conter filtros ativos
    return filtros.every(filtro =>
      produto.categorias.includes(filtro)
    );

  });
  if(filtrados.length === 0){

  lista.innerHTML = `
    <div class="sem-produtos">
      Nenhum produto encontrado.
    </div>
  `;

  return;
}

  filtrados =
  filtrados.sort(() => Math.random() - 0.5);
  filtrados.forEach(produto => {

    lista.innerHTML += `
      <div class="produto">
        <img src="${produto.imagem}">
        <h3 class="nome">${produto.nome}</h3>
        <p class="preco">${produto.preco}</p>
        <button onclick="comprarProduto(this)">
          Comprar
        </button>

      </div>
    `;
  });
  // sem filtro ativo
  if(filtros.length === 0){
    if(window.location.pathname.includes("inf")){
      mostrarProdCat("infantil");
    }
    if(window.location.pathname.includes("fem")){
      mostrarProdCat("feminino", true);
    }
    if(window.location.pathname.includes("masc")){
      mostrarProdCat("masculino", true);
    }
  }
}
// ==========================
// PRODUTOS RELACIONADOS
// ==========================

function mostrarRelacionados(produtoAtual){

  const area =
  document.getElementById("produtos-relacionados");

  if(!area) return;

  area.innerHTML = "";

  let relacionados = produtos.filter(produto =>

    produto.nome !== produtoAtual.nome &&

    produto.categorias.some(cat =>
      produtoAtual.categorias.includes(cat)
    )

  );

  relacionados =
  relacionados.sort(() => Math.random() - 0.5);

  relacionados = relacionados.slice(0,3);

  relacionados.forEach(produto => {

    area.innerHTML += `
      <div class="card-relacionado"
      onclick="abrirRelacionado('${produto.nome}')">

        <img src="${produto.imagem}">

        <h4>${produto.nome}</h4>

        <p>${produto.preco}</p>

      </div>
    `;
  });

}
function abrirRelacionado(nome){

  const produto =
  produtos.find(p => p.nome === nome);

  localStorage.setItem(
    "produtoSelecionado",
    JSON.stringify(produto)
  );

  window.location.href = "produto.html";
}