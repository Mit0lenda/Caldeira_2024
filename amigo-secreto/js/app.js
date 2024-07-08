let lista = [];
function adicionar() {
  let nome = document.getElementById("nome-amigo");
  if (nome.value == "") {
    alert("Informe o nome do amigo!");
    return;
  }
  if (lista.includes(nome.value)) {
    alert("Nome ja adicionado!");
    return;
  }
  let escolhido = document.getElementById("lista-amigos");
  lista.push(nome.value);
  if (escolhido.textContent == "") {
    escolhido.textContent = nome.value;
  } else {
    escolhido.textContent = escolhido.textContent + ", " + nome.value;
  }
  nome.value = "";
}
function sortear() {
  if (lista.length < 4) {
    alert("Adicione pelo menos 4 amigos!");
    return;
  }
  embaralha(lista);
  let nomeSorteados = document.getElementById("lista-sorteio");
  for (let i = 0; i < lista.length; i++) {
    if (i == lista.length - 1) {
      nomeSorteados.innerHTML =
        nomeSorteados.innerHTML + lista[i] + "-->" + lista[0] + "<br>";
    } else {
      nomeSorteados.innerHTML =
        nomeSorteados.innerHTML + lista[i] + "-->" + lista[i + 1] + "<br>";
    }
  }
}
function reiniciar() {
  lista = [];
  document.getElementById("lista-amigos").innerHTML = "";
  document.getElementById("lista-sorteio").innerHTML = "";
}
function embaralha(lista) {
  for (let indice = lista.length; indice; indice--) {
    const indiceAleatorio = Math.floor(Math.random() * indice);
    //atribui via destructuring
    [lista[indice - 1], lista[indiceAleatorio]] = [
      lista[indiceAleatorio],
      lista[indice - 1],
    ];
  }
}
