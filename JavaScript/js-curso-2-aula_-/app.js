let listaDeNumerosSorteado = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativa = 1;
function exibirTextoNaTela(tag,texto){
    let campo = document.querySelector(tag)
    campo.innerHTML = texto ;
    responsiveVoice.speak(texto,'Brazilian Portuguese Female',{rate:1.2});
}

function exibirMensagemInicial(){
    exibirTextoNaTela('h1','Jogo do número secreto');
    exibirTextoNaTela('p','Escolha um número entre 1 a '+ numeroLimite);
}
exibirMensagemInicial();

function verificarChute(){
    let chute = document.querySelector('input').value;
    if(chute == numeroSecreto){
        let palavraTentativa = tentativa > 1 ? 'tentativas' : 'tentativa';
        exibirTextoNaTela('h1','Acertou!');
        exibirTextoNaTela('p','Você descobriu o número secreto com ' + tentativa +' '+ palavraTentativa+'!');
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else{
        if(chute > numeroSecreto){
            exibirTextoNaTela('p','O número secreto é menor!');
        }else{
            exibirTextoNaTela('p','O número secreto é maior!');
        }
    }
    tentativa++
    limparCampo();
}
function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadesDeElementosNaLista = listaDeNumerosSorteado.length;
    if(quantidadesDeElementosNaLista == numeroLimite){
        listaDeNumerosSorteado = [];
    }
    if(listaDeNumerosSorteado.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    }
    else{
        listaDeNumerosSorteado.push(numeroEscolhido);
        console.log(listaDeNumerosSorteado);
        return numeroEscolhido;
    }
}
function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}
function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativa = 1 ;
    exibirMensagemInicial();
    document.getElementById('reiniciar').removeAttribute('disabled',true);  
}