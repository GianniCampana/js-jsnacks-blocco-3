$(function(){




var lista = [1,2,3,4,5,6,7,8,9];

var arrFiltrato = miaFunzione(lista,2,6);
console.log(arrFiltrato);

function miaFunzione(arr,min,max){
var arrFil = [];

for(var i=min; i<max; i++){
    
    arrFil.push(arr[i]); 
}
return arrFil;
}

});