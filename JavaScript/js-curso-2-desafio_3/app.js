function imc (altura,peso){
    let alturaEmMetros = altura/100 ;
    let imc = peso / (alturaEmMetros * alturaEmMetros);
console.log("Seu imc é " + imc.toFixed(2));
}
imc(180,90);
function fatorialIteração(n1){
    let resultado = 1;
    for (let i = 2; i <= n1; i++) {
        resultado *= i ;
        
    }
    return resultado ;
}
console.log(fatorialIteração(5));

function fatorialRecursão(n1){
    if(n1 === 0 || n1 === 1){
        return 1;
    }
    return n1 * fatorialRecursão(n1 - 1);
}
console.log(fatorialRecursão(5));

function converterDolar(valor){
    return valor * 4.80
}
console.log(converterDolar(5));

function salaRetangular(altura,largura){

    let area = largura * altura ;
    let perimetro = (altura + largura) * 2;

    console.log("A área é " + area +" m^2");
    console.log("O perimetro é " + perimetro + " metros");
}
let altura = 5;
let largura = 3;
salaRetangular(altura,largura);

function salaCircular(raio){
    let pi = 3.14;
    let area = (raio * raio )* pi;
    let circunferencia = pi * 2 * raio ;

    console.log("A área é " + area + " m^2");
    console.log("A circufêrencia é " + circunferencia.toFixed(2) + " metros");
}
let raio = 5;
salaCircular(raio);

function tabuada(numero){
    for(let i=0 ; i <= 10; i++){
        let multiplicado = numero * i;
        console.log(numero + " x " + i + " = " + multiplicado);
    }
}
let numero = 5;
tabuada(numero);