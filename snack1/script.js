$(function(){
    var zucchine = [
    
        {   varieta: 'zucchina1',
            peso: 3,
            lunghezza: 10
        },
        {   varieta: 'zucchina2',
            peso: 3,
            lunghezza: 10
        },
        {   varieta: 'zucchina3',
            peso: 3,
            lunghezza: 10
        },
        {   varieta: 'zucchina4',
            peso: 3,
            lunghezza: 10
        },
        {   varieta: 'zucchina5',
            peso: 3,
            lunghezza: 10
        },
        {   varieta: 'zucchina6',
            peso: 3,
            lunghezza: 10
        },
        {   varieta: 'zucchina7',
            peso: 3,
            lunghezza: 10
        },
        {   varieta: 'zucchina8',
            peso: 3,
            lunghezza: 10
        },
        {   varieta: 'zucchina9',
            peso: 3,
            lunghezza: 10
        },
        {   varieta: 'zucchina10',
            peso: 3,
            lunghezza: 10
        }
]
var pesoTotale = 0,

for(var zucchina of zucchine ){
    console.log( zucchina['peso']);
    pesoTotale += zucchina['peso']

}

console.log('il peso totale delle zucchine è: ' + pesoTotale);
})

