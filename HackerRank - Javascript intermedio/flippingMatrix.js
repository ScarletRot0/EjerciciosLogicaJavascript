function flippingMatrix(matrix) {
    // Write your code here
    let n=matrix.length/2;
    let max=0;
    let total=0;
    for (let i=0; i<n;i++){
        for (let j=0; j<n;j++){
            max=Number.MIN_VALUE; 
            max=Math.max(matrix[i][j], max); //a.
            max=Math.max(matrix[i][2*n-j-1],max); //b.
            max=Math.max(matrix[2*n-i-1][j],max); //c.
            max=Math.max(matrix[2*n-i-1][2*n-j-1],max); //d.
            total+=max;
        }
    }
    return total;
}

//Análisis del Problema
//1.Para cada celda (i,j) en el cuadrante superior izquierdo, hay 4 posibles valores que pueden ocupar esa posición en función de las inversiones:
//  a.matrix[i][j](el valor original).
//  b.matrix[i][2n−j−1] (el valor tras invertir la columna).
//  c.matrix[2n−i−1][j] (el valor tras invertir la fila).
//  d.matrix[2n−i−1][2n−j−1] (el valor tras invertir fila y columna).
//2.Por lo tanto, para maximizar el valor en esa posición, simplemente tomamos el máximo de esos 4 valores.
//3.Hacemos esto para cada celda en el cuadrante superior izquierdo.