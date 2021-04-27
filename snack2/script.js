/* creo 10 oggetti che rappresentano una zucchina */
var arr1 = [];
var arr2 = [];
var arrTot = [

    {
        varieta: 'zucchina1',
        lunghezza: 10,
        peso: 5
    },
    {
        varieta: 'zucchina2',
        lunghezza: 2,
        peso: 6
    },
    {
        varieta: 'zucchina3',
        lunghezza: 14,
        peso: 9
    },
    {
        varieta: 'zucchina4',
        lunghezza: 9,
        peso: 12
    },
    {
        varieta: 'zucchina5',
        lunghezza: 5,
        peso: 10
    },
    {
        varieta: 'zucchina6',
        lunghezza: 16,
        peso: 12
    },
    {
        varieta: 'zucchina7',
        lunghezza: 18,
        peso: 8
    },
    {
        varieta: 'zucchina8',
        lunghezza: 20,
        peso: 9
    },
    {
        varieta: 'zucchina9',
        lunghezza: 22,
        peso: 6
    },
    {
        varieta: 'zucchina10',
        lunghezza: 19,
        peso: 5
    }

];

for(var zucchina of arrTot){
    if(zucchina['lunghezza'] > 15){
        arr1.push(zucchina)
    }else{
        arr2.push(zucchina)
    }
}

var pesoUno = 0;
var pesoDue = 0;

for(var zucchina of arr1){
   
    pesoUno+=zucchina['peso'];
    
}
console.log('il peso delle zucchine PIU lunghe di 15 è ' + pesoUno)


for(var zucchina of arr2){
   
    pesoDue+=zucchina['peso'];
    
}
console.log('il peso delle zucchine MENO lunghe di 15 è ' + pesoDue)







