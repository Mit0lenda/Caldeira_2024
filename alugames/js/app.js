function alterarStatus(jogo){
    let game = document.getElementById(`game-${jogo}`);
    let imagem = game.querySelector('.dashboard__item__img');
    let button = game.querySelector('.dashboard__item__button');
    //let nomeJogo = game.querySelector('.dashboard__item__name');

    //alert(nomeJogo.textContent);
        if(imagem.classList.contains('dashboard__item__img--rented')){
            imagem.classList.remove('dashboard__item__img--rented');
            button.classList.remove('dashboard__item__button--return');
            button.textContent = 'Alugar';
        }else{
            imagem.classList.add('dashboard__item__img--rented');
            button.classList.add('dashboard__item__button--return');
            button.textContent = 'Devolver';
        }
}