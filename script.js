const inputItem = document.querySelector("#inputItem");
const inputQuantidade = document.querySelector("#inputQuantidade");
const inputPreco = document.querySelector("#inputPreco");
const btAdicionar = document.querySelector("#btAdicionar");
const btLimpar = document.querySelector("#btLimpar");
const tabela = document.querySelector("#tabela");

inputQuantidade.min = 1;

let listaItens = [];

const limparInputs = () => {
  inputItem.value = "";
  inputQuantidade.value = "";
  inputPreco.value = "";
  inputItem.focus();
}

const validacaoInputs = () => {
  let item = {
    descricao: inputItem.value,
    quantidade: inputQuantidade.value,
    preco: inputPreco.value
  }
  if (!item.descricao) {
    alert("Não há valores no campo de itens. Por favor, insira o nome do item.")
  }
  else if (!item.quantidade) {
    alert("Não há valores no campo de quantidade. Por favor, insira a quantidade desejada.")
  }
  else if (!item.preco) {
    alert("Não há valores no campo de preço. Por favor, insira o valor do item.")
  }
  else {
    listaItens.push(item);
    adicionarItemTabela();
  }
}

const adicionarItemTabela = () => {
  tabela.innerHTML = "";
  for (let index = 0; index < listaItens.length; index++) {
    let total = Number(listaItens[index].quantidade) * Number(listaItens[index].preco)

    const linhaTabela = document.createElement("tr");
    const colunaTabela1 = document.createElement("td");
    const colunaTabela2 = document.createElement("td");
    const colunaTabela3 = document.createElement("td");
    const colunaTabela4 = document.createElement("td");

    colunaTabela1.textContent = listaItens[index].descricao;
    colunaTabela2.textContent = Number(listaItens[index].quantidade);
    colunaTabela3.textContent = Number(listaItens[index].preco).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    ;
    colunaTabela4.textContent = total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    ;

    linhaTabela.appendChild(colunaTabela1);
    linhaTabela.appendChild(colunaTabela2);
    linhaTabela.appendChild(colunaTabela3);
    linhaTabela.appendChild(colunaTabela4);

    tabela.appendChild(linhaTabela);
  };
  limparInputs();
}

const limparTabela = () => {
  tabela.innerHTML = "";
  listaItens = [];
}

btAdicionar.onclick = validacaoInputs;
btLimpar.onclick = limparTabela;