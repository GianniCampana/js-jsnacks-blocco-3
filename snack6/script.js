var arrPrimo = [1,2,3,4,5,6,7,8,9,10,12,13,14,15];
var arrSecondo = [1,2,3,4,5,6,7,8,9,10];

var maggiore = arrPrimo;
var minore = arrSecondo;


if(arrPrimo.length === arrSecondo.length){
    console.log('Gli array sono uguali');
}else{
    while(arrSecondo.length<arrPrimo.length){
        arrSecondo.push(randomNumber(0,15))
    }
}

console.log(arrSecondo);
console.log(arrPrimo);


function randomNumber(min, max){
    return Math.floor(Math.random()*(max-min+1)+min);
}