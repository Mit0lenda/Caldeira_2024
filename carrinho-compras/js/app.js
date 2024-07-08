let valorTotal;
limpar();

function adicionar(){
 //pegar valores: nome do prod,quantidade e valor
let produto = document.getElementById('produto').value;
//split serve para pegar no texto o que queremos apos tal coisa que tenha no texto e podemos definir as casa atraves do []
let nomeProduto = produto.split('-')[0];
let valorUnitario = produto.split('R$')[1];
let quantidade = document.getElementById('quantidade').value;
 //calcular o preco, o nosso subtotal
let preco = quantidade * valorUnitario;
 //adicionar o carrinho
let carrinho = document.getElementById('lista-produtos');
carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
<span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${valorUnitario}</span>
</section>`
 //atualizar o valor total
valorTotal = valorTotal + preco;
let campoTotal = document.getElementById('valor-total');
campoTotal.textContent = `R$${valorTotal}`;
document.getElementById('quantidade').value = 0;
}
function limpar(){
valorTotal = 0;
document.getElementById('lista-produtos').innerHTML = '';
document.getElementById('valor-total').textContent = 'R$ 0';

}