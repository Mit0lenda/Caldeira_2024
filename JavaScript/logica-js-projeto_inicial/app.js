alert("Boas vindas ao jogo do número secreto");
let numeroSortido = 5000
let numeroSecreto = parseInt(Math.random() * numeroSortido + 1) ;
console.log(numeroSecreto)
let numeroCerto;
let tentativas = 1;
while(numeroCerto != numeroSecreto){
    numeroCerto=prompt("Escolha um numero entre 1 e " + numeroSortido);
    if(numeroSecreto == numeroCerto) {
        break;
    }
    else{
        if(numeroSecreto < numeroCerto){
            alert("O numero é menor que " + numeroCerto)
        }
        else{
            alert("O numero é maior que " + numeroCerto)
        }
        tentativas++
        alert("Vc errou :C numero de tentativas: " + tentativas);
    }
}
//Operador ternário
let PalavraTentativa = tentativas > 1 ? " tentativas" : " tentativa";
alert("Você descobriu o número secreto " + numeroSecreto + " com " + tentativas + PalavraTentativa );