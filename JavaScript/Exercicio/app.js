alert("Boas Vindas ao nosso Site!")
let vendas =prompt("Realizou quantas vendas ?")
let saldo = prompt("Qual seu saldo ?")
const nome=prompt("Qual seu nome:")
let idade = prompt("Qual suda idade:")
if(idade >= 18 ){
    alert("Você pode tirar habilitação "+ nome + "voce tem" + idade + " vc tem mais de 18!")
}
else{
    alert("Você não pode tirar habilitação " + nome +"\nVoce tem " + idade + " mas vc tem que ter 18 ou acima")
}