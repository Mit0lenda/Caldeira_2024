function sortear(){
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);
    //funcao parseInt serve para apenas numeros
    let sorteados = [];
    let numero;
    let resultado = document.getElementById('resultado');
    if(de>=ate){
        alert('Campo "Do número" deve ser inferior ao campo "Até o número".Verifique!');
        alterarStatusBotton();
        return;
    }
    else{
        if(quantidade > (ate - de + 1)){
            alert('"Quantidade de número" deve ser o possivel de numero entre "Do número" e "Até o número".Verifique!');
            alterarStatusBotton();
            return;
        }
    }
    for(let i = 0 ; i < quantidade;i++){
        numero = numeroAleatorio(de,ate);
        while(sorteados.includes(numero)){
            numero = numeroAleatorio(de,ate);
        }
        sorteados.push(numero);
    }
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`;
    alterarStatusBotton();
}

function alterarStatusBotton(){
    let botton = document.getElementById('btn-reiniciar');
    if(botton.classList.contains('container__botao-desabilitado')){
        botton.classList.remove('container__botao-desabilitado');
        botton.classList.add('container__botao');
    }else{
        botton.classList.remove('container__botao');
        botton.classList.add('container__botao-desabilitado');
    }
}

function numeroAleatorio(min,max){
    return Math.floor(Math.random()*(max - min + 1)) + min;
}

function reiniciar(){
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados: Nenhum sorteado até agora...</label>';
    alterarStatusBotton();
}