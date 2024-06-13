let titulo = document.querySelector('h1');
titulo.innerHTML = "Hora do Desafio";
function bconsole(){
    console.log("Botão foi clicado");
}
function alerta(){
    alert("Eu amo JS");
}
function bprompt(){
    let cidade=prompt("Qual o nome da cidade ?");
    alert("Fui para "+ cidade +" e lembrei de vc :D");
}
function soma(){
    let numero1 = parseFloat(prompt("Diga numero 1:"));
    let numero2 = parseFloat(prompt("Diga numero 2:"));
    let soma = numero1 + numero2;
    alert("A soma dos dois numeros é " + soma);
}