
document.getElementById("qtd-pista").innerHTML = "100";
document.getElementById("qtd-superior").innerHTML = "200";
document.getElementById("qtd-inferior").innerHTML = "400";

function comprar() {
  let cadeira = document.getElementById("tipo-ingresso").value;
  let quantidade = parseInt(document.getElementById("qtd").value);
    /*const ingressos = {
    'pista' : document.getElementById('qtd-pista'),
    'superior' : document.getElementById('qtd-superior'),
    'inferior' : document.getElementById('qtd-inferior')
}
let disponivel = parseInt(ingressos[cadeira].innerHTML);

if(quantidade <= disponivel){
    ingressos[cadeira].innerHTML = disponivel - quantidade;
    alert(`Compra realizada: ${quantidade} ingressos para ${cadeira.charAt(0).toUpperCase() + cadeira.slice(1)}`);
} else {
    alert(`Quantidade indisponível para ${cadeira.charAt(0).toUpperCase() + cadeira.slice(1)}`);
}*/

  if (cadeira == 'pista') {
    comprarPista(quantidade);
  } else if(cadeira == 'superior'){
    comprarSuperior(quantidade);
  } else{
    comprarInferior(quantidade);
  }
}
function comprarPista(quantidade){
    let quantidadePista = parseInt(document.getElementById('qtd-pista').textContent);
    if(quantidade > quantidadePista){
        alert('Qauntidade Indisponivel para pista!');
    }else{
        quantidadePista = quantidadePista - quantidade;
        document.getElementById('qtd-pista').textContent = quantidadePista;
        alert('Compra realizada com sucesso!');
    }
}
function comprarSuperior(quantidade){
    let quantidadesuperior = parseInt(document.getElementById('qtd-superior').textContent);
    if(quantidade > quantidadesuperior){
        alert('Qauntidade Indisponivel para superior!');
    }else{
        quantidadesuperior = quantidadesuperior - quantidade;
        document.getElementById('qtd-superior').textContent = quantidadesuperior;
        alert('Compra realizada com sucesso!');
    }
}
function comprarInferior(quantidade){
    let quantidadeInferior = parseInt(document.getElementById('qtd-inferior').textContent);
    if(quantidade > quantidadeInferior){
        alert('Qauntidade Indisponivel para inferior!');
    }else{
        quantidadeInferior = quantidadeInferior - quantidade;
        document.getElementById('qtd-inferior').textContent = quantidadeInferior;
        alert('Compra realizada com sucesso!');
    }
}
