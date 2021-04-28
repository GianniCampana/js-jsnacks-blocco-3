var arrGiocatori = [
    {
        firstname: 'Giovanni'
    },
    {
        firstname: 'Marco'
    },
    {
        firstname: 'Gianluca'
    },
    {
        firstname: 'Antonio'
    },
    {
        firstname: 'Pasquale'
    }
];

for(var giocatore of arrGiocatori){
    var lunghezza = 3;
    giocatore.code = codiceGiocatore(lunghezza);
    giocatore.media = RandomNumber(0,50);
    giocatore.percentuale = RandomNumber(0,100);
    
}
console.log(arrGiocatori);


/* funzione che mi crea il codice di tre lettere e tre numeri */


function codiceGiocatore(length){
    var lettere = 'ABCDEFGHILMNOPQRSTUVZWYJKX';
    var numeri = '1234567890';
    var lettereTrovate = '';
    var numeriTrovati = '';

    for(var i=0; i<length; i++){
        var random = Math.floor(Math.random() * lettere.length);
        lettereTrovate += lettere.substring(random, random + 1);
    }
    for(var i=0; i<length; i++){
        var randomNum = Math.floor(Math.random() * numeri.length);
        numeriTrovati += numeri.substring(randomNum, randomNum + 1);
    }

    var codice = lettereTrovate + numeriTrovati;

    return codice;  
}


function RandomNumber(min, max){
    return Math.floor(Math.random()*(max-min+1)+min);
}






  
















