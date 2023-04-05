/*****************************************************************************************************************************/
/*                                                Global Structures                                                          */
/*****************************************************************************************************************************/
openList = [
    //Se guardarán los "estados" (se guardarán soluciones diferentes(según la fila por la que vaya) de una fila,
    // hasta que llegue a una solución de esa fila, y así sucesivamente con las demás filas.
];
copyArray = [];
listPossibleValues = []; //For all the posible values of each node.

//Matriz del sudoku supremo, desmenusado en 5 matrices
matSupIzq = [   //se llama array
    [0, 3, 0, 4, 7, 0, 0, 0, 0],
    [2, 0, 7, 0, 8, 1, 0, 6, 0],
    [0, 5, 0, 6, 0, 2, 0, 0, 0],
    [1, 0, 2, 0, 0, 9, 0, 0, 6],
    [3, 8, 0, 0, 4, 0, 0, 0, 9],
    [0, 6, 4, 7, 0, 3, 0, 0, 8],
    [0, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 1, 0, 0, 0, 0, 4, 0, 0],
    [0, 0, 0, 2, 1, 7, 0, 0, 3]
]; //Matriz superior izquierda

matSupDer = [
    [0, 0, 0, 0, 4, 8, 0, 5, 0],
    [0, 8, 0, 5, 9, 0, 2, 0, 3],
    [0, 0, 0, 6, 0, 3, 0, 7, 0],
    [9, 0, 0, 1, 0, 0, 5, 0, 4],
    [8, 0, 0, 0, 3, 0, 0, 9, 7],
    [2, 0, 0, 9, 0, 5, 3, 8, 0],
    [0, 9, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 7, 0, 0, 0, 0, 4, 0],
    [6, 0, 0, 4, 1, 7, 0, 0, 0]
] //Matriz superior derecha

matCentral = [
    [0, 1, 0, 3, 0, 2, 0, 9, 0],
    [4, 0, 0, 0, 6, 0, 0, 0, 7],
    [0, 0, 3, 0, 0, 0, 6, 0, 0],
    [9, 0, 0, 6, 7, 4, 0, 0, 3],
    [0, 3, 0, 9, 0, 5, 0, 2, 0],
    [7, 0, 0, 2, 3, 1, 0, 0, 5],
    [0, 0, 9, 0, 0, 0, 3, 0, 0],
    [2, 0, 0, 0, 9, 0, 0, 0, 1],
    [0, 6, 0, 5, 0, 8, 0, 7, 0]
]; //Matriz central

matInfIzq = [
    [0, 0, 0, 6, 8, 3, 0, 0, 9],
    [0, 3, 0, 0, 0, 0, 2, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 6, 0],
    [0, 9, 1, 8, 0, 6, 0, 0, 4],
    [4, 6, 0, 0, 7, 0, 0, 0, 5],
    [5, 0, 8, 0, 0, 2, 0, 0, 3],
    [0, 8, 0, 5, 0, 9, 0, 0, 0],
    [6, 0, 5, 0, 3, 4, 0, 8, 0],
    [0, 4, 0, 7, 2, 0, 0, 0, 0]
] //Matriz inferior izquierda


/**
 * Pruebaaaaaaaaaa
 */
matInfDer = [
    [3, 0, 0, 1, 7, 2, 0, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 8, 0],
    [0, 7, 0, 0, 0, 0, 0, 0, 0],
    [7, 0, 0, 6, 0, 9, 3, 1, 0],
    [4, 0, 0, 0, 5, 0, 0, 9, 6],
    [1, 0, 0, 8, 0, 0, 5, 0, 4],
    [0, 0, 0, 3, 0, 5, 0, 2, 0],
    [0, 2, 0, 4, 6, 0, 7, 0, 1],
    [0, 0, 0, 0, 1, 7, 0, 3, 0]
] //Matriz inferior derecha

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
 * It update the values of the list of posibble values.
 * @param {Array} array is the array when we goint to search.
 * @param {Number} row is the row where we going validate the apparitions.
 * @param {Number} column is the column where we going validate the apparitions.
*/
function updateLPossVal(array, row, column){
    for (let count = 1; count < 10; count++) {               //aumentará hasta 9 y se reiniciará, es para ver los valores que no se repiten en filas, columnas y cuadricula
        timesDontAppear = 0;                                 //las veces que no aparece cada número en las validaciones.
        if (validateRowValues(array, row, count) === false)  //si no aparece, le aumentamos 1 al contador.
            timesDontAppear++;
        if (validateColumnValues(array, column, count) === false)       //si no aparece, le aumentamos 1 al contador.
            timesDontAppear++;
        if (validateGridValues(array, row, column, count) === false)    //si no aparece, le aumentamos 1 al contador.
            timesDontAppear++;
        listPossibleValues.push([count, timesDontAppear])               //para el primer elemento seria: [1, (el número de las veces que no aparezca)]
    }
}

/**
 * Set the possible values for each box.
 * @param {Array} array is the array we will try to complete.
*/
function chooseValues(array, row, column){
    for (let lista = 0; lista < 9; lista++) {
        if (listPossibleValues[lista][1] === 3){                //el primer valor sería el número, y el segundo la cantidad de veces que no aparece en el sudoku
            array[row][column] = listPossibleValues[lista][0];  //el primero que encuentre que no aparezca 3 veces lo asigna a la casilla
            console.log("\nSe actualizó el numero", listPossibleValues[lista][0], "en la fila", row + 1, "y la columna", column + 1);
            listPossibleValues = [];                            //limpia la lista abierta
            return;
        }else{
            //console.log("Un valor que SI aparece es: ", listPossibleValues[lista][0]);//----------------------------quitar al terminar debug
            
            //para limpiar la lista y que pueda seguir solucionando con las demás filas.
            if ((listPossibleValues[lista][0] === 9) && (listPossibleValues[lista][1] < 3)) {
                listPossibleValues = [];
            }
        }
    } 
}

/**
 * 
 * 
*/
function updateOpenL(){

}

function updateCloseL(){

}

/**
 * This function prints in the console the sudoku we are solving.
 * @param {Array} array the array we are solving.
 * @param {Number} wichOneSudoku it recive the value number 1 if we want to print on the console the array passed by parameter;
 * or the value number 2 if we want to print the solved sudoku.
*/
function printSudoku(array, whichOneSudoku){
    if (whichOneSudoku === 1) {
        console.log("\n",
            array[0][0], array[0][1], array[0][2], array[0][3], array[0][4], array[0][5], array[0][6], array[0][7], array[0][8], "\n",
            array[1][0], array[1][1], array[1][2], array[1][3], array[1][4], array[1][5], array[1][6], array[1][7], array[1][8], "\n",
            array[2][0], array[2][1], array[2][2], array[2][3], array[2][4], array[2][5], array[2][6], array[2][7], array[2][8], "\n",
            array[3][0], array[3][1], array[3][2], array[3][3], array[3][4], array[3][5], array[3][6], array[3][7], array[3][8], "\n",
            array[4][0], array[4][1], array[4][2], array[4][3], array[4][4], array[4][5], array[4][6], array[4][7], array[4][8], "\n",
            array[5][0], array[5][1], array[5][2], array[5][3], array[5][4], array[5][5], array[5][6], array[5][7], array[5][8], "\n",
            array[6][0], array[6][1], array[6][2], array[6][3], array[6][4], array[6][5], array[6][6], array[6][7], array[6][8], "\n",
            array[7][0], array[7][1], array[7][2], array[7][3], array[7][4], array[7][5], array[7][6], array[7][7], array[7][8], "\n",
            array[8][0], array[8][1], array[8][2], array[8][3], array[8][4], array[8][5], array[8][6], array[8][7], array[8][8], "\n"
        );
    }
    if (whichOneSudoku === 2) {
        console.log("\n",
            matSupIzq[0][0], matSupIzq[0][1], matSupIzq[0][2], matSupIzq[0][3], matSupIzq[0][4], matSupIzq[0][5], matSupIzq[0][6], matSupIzq[0][7], matSupIzq[0][8],       " ",               " ",             " ",        matSupDer[0][0], matSupDer[0][1], matSupDer[0][2], matSupDer[0][3], matSupDer[0][4], matSupDer[0][5], matSupDer[0][6], matSupDer[0][7], matSupDer[0][8], "\n",
            matSupIzq[1][0], matSupIzq[1][1], matSupIzq[1][2], matSupIzq[1][3], matSupIzq[1][4], matSupIzq[1][5], matSupIzq[1][6], matSupIzq[1][7], matSupIzq[1][8],       " ",               " ",             " ",        matSupDer[1][0], matSupDer[1][1], matSupDer[1][2], matSupDer[1][3], matSupDer[1][4], matSupDer[1][5], matSupDer[1][6], matSupDer[1][7], matSupDer[1][8], "\n",
            matSupIzq[2][0], matSupIzq[2][1], matSupIzq[2][2], matSupIzq[2][3], matSupIzq[2][4], matSupIzq[2][5], matSupIzq[2][6], matSupIzq[2][7], matSupIzq[2][8],       " ",               " ",             " ",        matSupDer[2][0], matSupDer[2][1], matSupDer[2][2], matSupDer[2][3], matSupDer[2][4], matSupDer[2][5], matSupDer[2][6], matSupDer[2][7], matSupDer[2][8], "\n",
            matSupIzq[3][0], matSupIzq[3][1], matSupIzq[3][2], matSupIzq[3][3], matSupIzq[3][4], matSupIzq[3][5], matSupIzq[3][6], matSupIzq[3][7], matSupIzq[3][8],       " ",               " ",             " ",        matSupDer[3][0], matSupDer[3][1], matSupDer[3][2], matSupDer[3][3], matSupDer[3][4], matSupDer[3][5], matSupDer[3][6], matSupDer[3][7], matSupDer[3][8], "\n",
            matSupIzq[4][0], matSupIzq[4][1], matSupIzq[4][2], matSupIzq[4][3], matSupIzq[4][4], matSupIzq[4][5], matSupIzq[4][6], matSupIzq[4][7], matSupIzq[4][8],       " ",               " ",             " ",        matSupDer[4][0], matSupDer[4][1], matSupDer[4][2], matSupDer[4][3], matSupDer[4][4], matSupDer[4][5], matSupDer[4][6], matSupDer[4][7], matSupDer[4][8], "\n",
            matSupIzq[5][0], matSupIzq[5][1], matSupIzq[5][2], matSupIzq[5][3], matSupIzq[5][4], matSupIzq[5][5], matSupIzq[5][6], matSupIzq[5][7], matSupIzq[5][8],       " ",               " ",             " ",        matSupDer[5][0], matSupDer[5][1], matSupDer[5][2], matSupDer[5][3], matSupDer[5][4], matSupDer[5][5], matSupDer[5][6], matSupDer[5][7], matSupDer[5][8], "\n",
            matSupIzq[6][0], matSupIzq[6][1], matSupIzq[6][2], matSupIzq[6][3], matSupIzq[6][4], matSupIzq[6][5], matSupIzq[6][6], matSupIzq[6][7], matSupIzq[6][8], matCentral[0][3], matCentral[0][4], matCentral[0][5], matSupDer[6][0], matSupDer[6][1], matSupDer[6][2], matSupDer[6][3], matSupDer[6][4], matSupDer[6][5], matSupDer[6][6], matSupDer[6][7], matSupDer[6][8], "\n",
            matSupIzq[7][0], matSupIzq[7][1], matSupIzq[7][2], matSupIzq[7][3], matSupIzq[7][4], matSupIzq[7][5], matSupIzq[7][6], matSupIzq[7][7], matSupIzq[7][8], matCentral[1][3], matCentral[1][4], matCentral[1][5], matSupDer[7][0], matSupDer[7][1], matSupDer[7][2], matSupDer[7][3], matSupDer[7][4], matSupDer[7][5], matSupDer[7][6], matSupDer[7][7], matSupDer[7][8], "\n",
            matSupIzq[8][0], matSupIzq[8][1], matSupIzq[8][2], matSupIzq[8][3], matSupIzq[8][4], matSupIzq[8][5], matSupIzq[8][6], matSupIzq[8][7], matSupIzq[8][8], matCentral[2][3], matCentral[2][4], matCentral[2][5], matSupDer[8][0], matSupDer[8][1], matSupDer[8][2], matSupDer[8][3], matSupDer[8][4], matSupDer[8][5], matSupDer[8][6], matSupDer[8][7], matSupDer[8][8], "\n",
                 " ",              " ",             " ",             " ",             " ",             " ",      matCentral[3][0],matCentral[3][1],matCentral[3][2], matCentral[3][3], matCentral[3][4], matCentral[3][5], matCentral[3][6],matCentral[3][7],matCentral[3][8], "\n",
                 " ",              " ",             " ",             " ",             " ",             " ",      matCentral[4][0],matCentral[4][1],matCentral[4][2], matCentral[4][3], matCentral[4][4], matCentral[4][5], matCentral[4][6],matCentral[4][7],matCentral[4][8], "\n",
                 " ",              " ",             " ",             " ",             " ",             " ",      matCentral[5][0],matCentral[5][1],matCentral[5][2], matCentral[5][3], matCentral[5][4], matCentral[5][5], matCentral[5][6],matCentral[5][7],matCentral[5][8], "\n",
            matInfIzq[0][0], matInfIzq[0][1], matInfIzq[0][2], matInfIzq[0][3], matInfIzq[0][4], matInfIzq[0][5],matCentral[6][0],matCentral[6][1],matCentral[6][2], matCentral[6][3], matCentral[6][4], matCentral[6][5], matCentral[6][6],matCentral[6][7],matCentral[6][8],matInfDer[0][3], matInfDer[0][4], matInfDer[0][5], matInfDer[0][6], matInfDer[0][7], matInfDer[0][8], "\n",
            matInfIzq[1][0], matInfIzq[1][1], matInfIzq[1][2], matInfIzq[1][3], matInfIzq[1][4], matInfIzq[1][5],matCentral[7][0],matCentral[7][1],matCentral[7][2], matCentral[7][3], matCentral[7][4], matCentral[7][5], matCentral[7][6],matCentral[7][7],matCentral[7][8],matInfDer[1][3], matInfDer[1][4], matInfDer[1][5], matInfDer[1][6], matInfDer[1][7], matInfDer[1][8], "\n",
            matInfIzq[2][0], matInfIzq[2][1], matInfIzq[2][2], matInfIzq[2][3], matInfIzq[2][4], matInfIzq[2][5],matCentral[8][0],matCentral[8][1],matCentral[8][2], matCentral[8][3], matCentral[8][4], matCentral[8][5], matCentral[8][6],matCentral[8][7],matCentral[8][8],matInfDer[2][3], matInfDer[2][4], matInfDer[2][5], matInfDer[2][6], matInfDer[2][7], matInfDer[2][8], "\n",
            matInfIzq[3][0], matInfIzq[3][1], matInfIzq[3][2], matInfIzq[3][3], matInfIzq[3][4], matInfIzq[3][5], matInfIzq[3][6], matInfIzq[3][7], matInfIzq[3][8],       " ",               " ",             " ",        matInfDer[3][0], matInfDer[3][1], matInfDer[3][2], matInfDer[3][3], matInfDer[3][4], matInfDer[3][5], matInfDer[3][6], matInfDer[3][7], matInfDer[3][8], "\n",
            matInfIzq[4][0], matInfIzq[4][1], matInfIzq[4][2], matInfIzq[4][3], matInfIzq[4][4], matInfIzq[4][5], matInfIzq[4][6], matInfIzq[4][7], matInfIzq[4][8],       " ",               " ",             " ",        matInfDer[4][0], matInfDer[4][1], matInfDer[4][2], matInfDer[4][3], matInfDer[4][4], matInfDer[4][5], matInfDer[4][6], matInfDer[4][7], matInfDer[4][8], "\n",
            matInfIzq[5][0], matInfIzq[5][1], matInfIzq[5][2], matInfIzq[5][3], matInfIzq[5][4], matInfIzq[5][5], matInfIzq[5][6], matInfIzq[5][7], matInfIzq[5][8],       " ",               " ",             " ",        matInfDer[5][0], matInfDer[5][1], matInfDer[5][2], matInfDer[5][3], matInfDer[5][4], matInfDer[5][5], matInfDer[5][6], matInfDer[5][7], matInfDer[5][8], "\n",
            matInfIzq[6][0], matInfIzq[6][1], matInfIzq[6][2], matInfIzq[6][3], matInfIzq[6][4], matInfIzq[6][5], matInfIzq[6][6], matInfIzq[6][7], matInfIzq[6][8],       " ",               " ",             " ",        matInfDer[6][0], matInfDer[6][1], matInfDer[6][2], matInfDer[6][3], matInfDer[6][4], matInfDer[6][5], matInfDer[6][6], matInfDer[6][7], matInfDer[6][8], "\n",
            matInfIzq[7][0], matInfIzq[7][1], matInfIzq[7][2], matInfIzq[7][3], matInfIzq[7][4], matInfIzq[7][5], matInfIzq[7][6], matInfIzq[7][7], matInfIzq[7][8],       " ",               " ",             " ",        matInfDer[7][0], matInfDer[7][1], matInfDer[7][2], matInfDer[7][3], matInfDer[7][4], matInfDer[7][5], matInfDer[7][6], matInfDer[7][7], matInfDer[7][8], "\n",
            matInfIzq[8][0], matInfIzq[8][1], matInfIzq[8][2], matInfIzq[8][3], matInfIzq[8][4], matInfIzq[8][5], matInfIzq[8][6], matInfIzq[8][7], matInfIzq[8][8],       " ",               " ",             " ",        matInfDer[8][0], matInfDer[8][1], matInfDer[8][2], matInfDer[8][3], matInfDer[8][4], matInfDer[8][5], matInfDer[8][6], matInfDer[8][7], matInfDer[8][8], "\n",
        ); 
    }
}

/**
 * This function counts the number of zeros that there are in a array.
 * @param {Array} array is the array we going to count the zeros.
 * @returns the number of zeros.
 */
function countZeros(array){
    count = 0;
    for (let i = 0; i < 9; i++) {          //9 por las filas
        for (let j = 0; j < 9; j++) {      //9 por las columnas de una fila
            if (array[i][j] === 0) {       //Revisa cuales son ceros
                count++;
            }
        }
    }
    //console.log("La cantidad de ceros es: ", count);
    return count;
}

function checkNumberStates(){
    return openList.length
}

function printOpenList(){
    amount = openList.length;
    message = "";
    if (amount === 1) {
        message = "\nEl cuál es:";
    }
    if (amount > 1) {
        message = "\nLos cuáles son:";
    }
    console.log("\n\nAhora hay", amount, "estado/s en la lista abierta.");
    console.log(message);
    for (let index = 0; index < amount; index++) {
        console.log("\n", "Estado", index + 1);
        printSudoku(openList[index], 1)
    }
}

/**
 * It calls the fuctions that evaluates all the posible values of all nodes, at the end add  the "state"(possible solution) of the sudoku to the open list..
 * @param {Array} array is each array/sudoku separately of the five sudokus.
 * @returns "dont have solution" in case the sudoku has not been solved.
*/
function nodeEvaluation1(array){
    out = true;
    while (out) {
        copyArray = structuredClone(array);    //le pasamos una copia para trabajar con la copia sacando posibles soluciones(estados),
                                               //cada vez que se haga un estado diferente se reinicia la copia con el original.
        for (let i = 0; i < 9; i++) {          //9 porque es la cantidad de listas/filas en una matriz
            console.log("\nVamos por la fila: ", i)
            for (let j = 0; j < 9; j++) {      //9 porque es la cantidad de elementos/columnas por fila
    
                if (array[i][j] === 0) {
                    updateLPossVal(copyArray, i, j);  //Revisa todos los valores que se pueden asignar a esa casilla
                    chooseValues(copyArray, i, j);
                    printSudoku(copyArray, 1);
                }
            }//end for columns
            if (i === 8) {
                if (countZeros(copyArray) > 0) {
                    openList.push(copyArray);     //se agrega el estado a la lista abierta
                    printOpenList();
                    return "dont have solution"
                }
            }
        }//end for rows
    }
}

nodeEvaluation1(matSupIzq);

//Quitar cambiones de debugueo en las siguiente funciones:
//node Evaluation--console.log(....
//updateOpenL--console.log("En teoria ya ...
//updateOpenL--console.log("Un valor que
//countZeros---console.log("La...
