var arrGiocatori = [];
var lunghezza = 3;
/* funzione che mi crea il codice di tre lettere e tre numeri */

codiceGiocatore(lunghezza)
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



  
















