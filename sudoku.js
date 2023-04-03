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
 * @param {Array} array is the array/sudoku when we going to validate row values.
 * @param {Number} column the column we goint to validate in the array.
 * @param {Number} value the value we goin to validate if it exist.
*/
function validateColumnValues(array, column, value){
    for (let i = 0; i < 9; i++) {  //aumentar a la fila, para que revise todos los elementos de esa columna.
        if (array[i][column] === value)
            return true;
    }
    return false;
}

/**
 * It validates if the values is in the grid.
 * @param {Array} array is the array/sudoku when we going to validate row values.
 * @param {Number} row the row we goint to validate in the array.
 * @param {Number} column the column we goint to validate in the array.
 * @param {Number} value the value we goin to validate if it exist.
*/
function validateGridValues(array, row, column, value){
    starRow = 0;
    endRow = 0;
    startColumn = 0;
    endColumn = 0;
    //If's para delimitar la búsqueda solo a la cuadrícula en donde está la casilla
    if (row >= 0 && row <=2) {
        starRow = 0;
        endRow = 2;
    }
    if (row >= 3 && row <=5) {
        starRow = 3;
        endRow = 5;
    }
    if (row >= 6 && row <=8) {
        starRow = 6;
        endRow = 8;
    }
    if (column >= 0 && column <=2) {
        startColumn = 0;
        endColumn = 2;
    }
    if (column >= 3 && column <=5) {
        startColumn = 3;
        endColumn = 5;
    }
    if (column >= 6 && column <=8) {
        startColumn = 6;
        endColumn = 8;
    }

    for (let i = starRow; i <= endRow; i++) {          

        for (let j = startColumn; j <= endColumn; j++) {      
            if (array[i][j] === value)
                return true;
        }//end ciclo de las columnas
    }//end ciclo de las filas
    return false;
}

/**
 * It update the values of the open list.
 * @param {Array} array is the array when we goint to search
 * @param {Number} row is the row where we going validate the apparitions.
 * @param {Number} column is the column where we going validate the apparitions.
*/
function updateOpenL(array, row, column){
    //este ciclo, en teoría se hará 3645 veces
    for (let count = 1; count < 10; count++) {               //aumentará hasta 9 y se reiniciará, es para ver los valores que no se repiten en filas, columnas y cuadricula
        timesDontAppear = 0;                                 //las veces que no aparece cada número en las validaciones.
        if (validateRowValues(array, row, count) === false)  //si no aparece, le aumentamos 1 al contador.
            timesDontAppear++;
        if (validateColumnValues(array, column, count) === false)       //si no aparece, le aumentamos 1 al contador.
            timesDontAppear++;
        if (validateGridValues(array, row, column, count) === false)    //si no aparece, le aumentamos 1 al contador.
            timesDontAppear++;
        openList.push([count, timesDontAppear])             //para el primer elemento seria: [1, (el número de las veces que no aparezca)]
    }
}

/**
 * It update the values of the close list.
*/
//function updateCloseL(openList, array, row, column){
function updateCloseL(array, row, column){
    for (let lista = 0; lista < 9; lista++) {
        if (openList[lista][1] === 3){                  //el primer valor sería el número, y el segundo la cantidad de veces que no aparece en el sudoku
            array[row][column] = openList[lista][0];  //el primero que encuentre que no aparezca 3 veces lo asigna a la casilla
            //matSupIzq[row][column] = openList[lista][0];  //el primero que encuentre que no aparezca 3 veces lo asigna a la casilla
            console.log("En teoria ya actualizo un valor.","\n", "El numero:", openList[lista][0]," en la fila:", row, " y la columna:", column);//----------------------------quitar al terminar debug
            openList = [];                              //limpia la lista abierta
            return;
        }else{
            console.log("Un valor que SI aparecen es: ", openList[lista][0]);
        }
        
    }
}

/**
 * It prints in the console the whole sudoku.
*/
function printSudoku(array){
    console.log(
        array[0][0], array[0][1], array[0][2], matSupIzq[0][3], matSupIzq[0][4], matSupIzq[0][5], matSupIzq[0][6], matSupIzq[0][7], matSupIzq[0][8], " ", " ", " ", "0", "0", "0", "\n",
        matSupIzq[1][0], matSupIzq[1][1], matSupIzq[1][2], matSupIzq[1][3], matSupIzq[1][4], matSupIzq[1][5], matSupIzq[1][6], matSupIzq[1][7], matSupIzq[1][8], " ", " ", " ", "0", "0", "0", "\n",
        matSupIzq[2][0], matSupIzq[2][1], matSupIzq[2][2], matSupIzq[2][3], matSupIzq[2][4], matSupIzq[2][5], matSupIzq[2][6], matSupIzq[2][7], matSupIzq[2][8], " ", " ", " ", "\n",
        matSupIzq[3][0], matSupIzq[3][1], matSupIzq[3][2], matSupIzq[3][3], matSupIzq[3][4], matSupIzq[3][5], matSupIzq[3][6], matSupIzq[3][7], matSupIzq[3][8], " ", " ", " ", "\n",
        matSupIzq[4][0], matSupIzq[4][1], matSupIzq[4][2], matSupIzq[4][3], matSupIzq[4][4], matSupIzq[4][5], matSupIzq[4][6], matSupIzq[4][7], matSupIzq[4][8], " ", " ", " ", "\n",
        matSupIzq[5][0], matSupIzq[5][1], matSupIzq[5][2], matSupIzq[5][3], matSupIzq[5][4], matSupIzq[5][5], matSupIzq[5][6], matSupIzq[5][7], matSupIzq[5][8], " ", " ", " ", "\n",
        matSupIzq[6][0], matSupIzq[6][1], matSupIzq[6][2], matSupIzq[6][3], matSupIzq[6][4], matSupIzq[6][5], matSupIzq[6][6], matSupIzq[6][7], matSupIzq[6][8], " ", " ", " ", "\n",
        matSupIzq[7][0], matSupIzq[7][1], matSupIzq[7][2], matSupIzq[7][3], matSupIzq[7][4], matSupIzq[7][5], matSupIzq[7][6], matSupIzq[7][7], matSupIzq[7][8], " ", " ", " ", "\n",
        matSupIzq[8][0], matSupIzq[8][1], matSupIzq[8][2], matSupIzq[8][3], matSupIzq[8][4], matSupIzq[8][5], matSupIzq[8][6], matSupIzq[8][7], matSupIzq[8][8], " ", " ", " ", "\n",
    );
}

/**
 * It calls the fuctions that evaluates all the posible values of all nodes.
 * @param {Array} array is each array/sudoku separately of the five sudokus.
*/
function nodeEvaluation(array){
    for (let i = 0; i < 9; i++) {          //9 porque es la cantidad de listas/filas en una matriz
        console.log("Vamos por la fila:",i)
        for (let j = 0; j < 9; j++) {      //9 porque es la cantidad de elementos/columnas por fila

            if (array[i][j] === 0) {       //LLama a revisar cuales son los posibles valores a asignar para esa casilla
                updateOpenL(array, i, j);  //Revisa todos los valores que se pueden asignar a esa casilla
                updateCloseL(array, i, j); //Actualiza la lista cerrada(cada una de las matrices hace de lista cerrada,
                                           //las cuales se van actualizando conforme se terminan de validar los valores posibles)
                printSudoku(array);
            }

        }//end ciclo de las columnas

    }//end ciclo de las filas
}

nodeEvaluation(matSupIzq);

//Quitar cambiones en las siguiente funciones:
//updateCloseL
//








/**
 * Here we gonna put the information of the function.
 * @param {string} parametro1 las llaves que están antes del nombre del parametro es para poner el tipo de dato del parametro.
 */
function prueba (parametro1){

}
