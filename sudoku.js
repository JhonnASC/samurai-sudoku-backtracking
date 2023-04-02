/*****************************************************************************************************************************/
/*                                                Global Structures                                                          */
/*****************************************************************************************************************************/
openList = [];  //For all the posible values of each node.
closeList = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
]; //For all the better values of each node.    ------hacer una matriz con la lista cerrada e ir actualizandola con los mejores valores para cada casilla.

//Matriz del sudoku supremo, desmenusado en 5 matrices, solo hay dos para probar el algoritmo.
matSupIzq = [
    [0, 0, 0, 5, 0, 0, 4, 0, 0],
    [8, 5, 0, 0, 3, 0, 0, 0, 0],
    [7, 0, 3, 0, 0, 0, 6, 0, 0],
    [0, 0, 0, 8, 0, 7, 5, 0, 0],
    [0, 0, 8, 0, 0, 0, 0, 7, 0],
    [4, 2, 0, 0, 0, 0, 0, 9, 8],
    [0, 0, 0, 0, 0, 0, 0, 0, 2],
    [2, 0, 0, 9, 6, 5, 0, 4, 0],
    [0, 0, 0, 0, 0, 3, 0, 6, 5],
];


matCentral = [
    [0, 0, 2, 0, 0, 0, 0, 0, 0],
    [0, 4, 0, 5, 0, 0, 8, 0, 6],
    [0, 6, 5, 4, 3, 0, 0, 7, 9],
    [4, 7, 0, 0, 0, 0, 0, 3, 0],
    [0, 0, 0, 0, 2, 0, 0, 0, 0],
    [0, 0, 0, 3, 0, 6, 0, 0, 0],
    [0, 3, 9, 0, 0, 0, 0, 5, 0],
    [0, 0, 1, 0, 0, 0, 0, 8, 7],
    [5, 8, 4, 6, 0, 3, 0, 9, 0],
];

/*****************************************************************************************************************************/
/*                                                    Functions                                                              */
/*****************************************************************************************************************************/
/**
 * It validates if the values is in the row.
 * @param {Array} array is the array/sudoku when we going to validate row values.
 * @param {Number} row the row we goint to validate in the array.
 * @param {Number} value the value we goin to validate if it exist.
*/
function validateRowValues(array, row, value){
    for (let j = 0; j < 9; j++) {  //aumentar a la columna, para que revise todos los elementos de esa fila.
        if (array[row][j] === value)
            return true;
    }
    return false;
}

/**
 * It validates if the values is in the column.
*/
function validateColumnValues(array, column, value){

}

/**
 * It validates if the values is in the grid.
*/
function validateGridValues(row, column, value){

}

/**
 * It update the values of the open list.
 * @param {Array} array is the array when we goint to search
 * @param
 * @param
*/
function updateOpenL(array, row, column){
    //este ciclo, en teoría se hará 3645 veces
    for (let count = 1; count < 10; count++) {               //aumentará hasta 9 y se reiniciará, es para ver los valores que no se repiten en filas, columnas y cuadricula
        timesDontAppear = 0;                                 //las veces que no aparece cada número en las validaciones.
        if (validateRowValues(array, row, count) === false)  //si no aparece, le aumentamos 1 al contador.
            timesDontAppear++;
        if (validateColumnValues(array, column, count) === false)
            timesDontAppear++;
        if (validateGridValues(row, column, count) === false)
            timesDontAppear++;
        openList.push([count, timesDontAppear])             //para el primer elemento seria: [1, (el número de las veces que no aparezca)]
    }
}

/**
 * It update the values of the close list.
*/
function updateCloseL(row, column, value){

}

/**
 * It print in the console the whole sudoku.
*/
function printSudoku(){

}

/**
 * It calls the fuctions that evaluates all the posible values of all nodes.
 * @param {Array} array is each array/sudoku separately of the five sudokus.
*/
function nodeEvaluation(array){
    for (let i = 0; i < 9; i++) {          //9 porque es la cantidad de listas/filas en una matriz

        for (let j = 0; j < 9; j++) {      //9 porque es la cantidad de elementos/columnas por fila

            if (array[i][j] === 0) {       //LLama a revisar cuales son los posibles valores a asignar
                updateOpenL(array, i, j);
            }

        }//end ciclo de las columnas

    }//end ciclo de las filas
}


//nodeEvaluation(matSupIzq);

/* if (1+3 === 3)
    //print("Es igual a 3");
    console.log("Es igual a 3");
    else console.log("No es igual a 3"); */








/**
 * Here we gonna put the information of the function.
 * @param {string} parametro1 las llaves que están antes del nombre del parametro es para poner el tipo de dato del parametro.
 */
function prueba (parametro1){

}
