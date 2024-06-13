function ola(){
    console.log("Olá,Mundo!");
}

function nome1(nome){
    console.log("Olá,"+nome+"!");
}
nome1('nicollas');

function dobro(num1){
return console.log( "" + num1 * 2);
}
dobro(8);

function media(n1,n2,n3){
    return console.log((n1 + n2 + n3) / 3)
}
media(6,6,6);

function maior(n1,n2){
    if(n1 > n2){
        return console.log(n1);
    }
    else{
        return console.log(n2);
    }
}
maior(5,4);

function multi(n1){
return console.log(n1 * n1)
}
multi(5);