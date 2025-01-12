function plusMinus(arr) {
    let arrayPositivos = [];
    let arrayZero = [];
    let arrayNegativos = [];
    for (let i = 0 ; i<arr.length ;i++){
        if (arr[i]===0){
            arrayZero.push(arr[i]);
        }else if (arr[i]>0){
            arrayPositivos.push(arr[i]);
        } else {
            arrayNegativos.push(arr[i]);
        }
        
    }
    console.log(arrayPositivos.length/arr.length);
    console.log(arrayNegativos.length/arr.length);
    console.log(arrayZero.length/arr.length);

}