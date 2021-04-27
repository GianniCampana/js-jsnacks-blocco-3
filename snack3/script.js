$(function(){
    var arr1 = [1,2,3,4,5]

    var arr2 =['uno','due','tre','quattro','cinque']

    var arrTot =[];

    var i = 0;

  while (arr1[i] != undefined && arr2[i] != undefined) {
    arrTot.push(arr1[i]);
    arrTot.push(arr2[i]);
    i++;
  }
  console.log(arrTot);
})


