// TABLEROS // 
//son tableros 9x9 rellenados con null
var sudokuTopLeft = creaSudoku();      

var sudokuTopRight = creaSudoku();

var sudokuCenter = creaSudoku();

var sudokuBottLeft = creaSudoku();

var sudokuBottRight = creaSudoku();

/**
 * Funcion para crear un sudoku 9x9 lleno de null
 */
function creaSudoku(){
    let sudoku = [];
    for (let i = 0; i < 9; i++) {                   // Crear una matriz 9x9 para el Sudoku 
        sudoku.push(new Array(9).fill(null));
    }
    return sudoku
}

/**
 * Funcion para actulizar las esquinas de los sudokus Internamente con excepcion del centro
 */
function actualizarEsquinas(){

    // arreglo board de arriba izq  

    for (let y = 6; y < 9; y++) {
        for (let x = 6; x < 9 ; x++) {
            sudokuTopLeft[y][x] = sudokuCenter[y-6][x-6]
        }
    }

    // arreglo board de arriba derecha

    for (let y = 6; y < 9; y++) {
        for (let x = 0; x < 3 ; x++) {
            sudokuTopRight[y][x] = sudokuCenter[y-6][x+6]
        }
    }

     // arreglo board de abajo izq

    for (let y = 0; y < 3; y++) {
        for (let x = 6; x < 9 ; x++) {
            sudokuBottLeft[y][x] = sudokuCenter[y+6][x-6]
        }
    }

    // arreglo board de abajo derecha

    for (let y = 0; y < 3; y++) {
        for (let x = 0; x < 3 ; x++) {
            sudokuBottRight[y][x] = sudokuCenter[y+6][x+6]
        }
    }
}

// --------------------------------------------------------------------
// CODIGO BACKTRACKING 
//---------------------------------------------------------------------

function revisar_eje_y(board, revisar_y, revisar_x) {
    for (let i = 0; i < 9; i++) {
        if (i !== revisar_y ){
            if(board[i][revisar_x] === board[revisar_y][revisar_x]) {
                return false;
            }
        }
    }
    return true;
}

function revisar_eje_x(board, revisar_y, revisar_x) {
    for (let i = 0; i < 9; i++) {
        if (i !== revisar_x){
            if(board[revisar_y][i] === board[revisar_y][revisar_x]) {
                return false;
            }
        }
    }
    return true;
}

function revisar_submatriz(board, revisar_y, revisar_x) {

    const primeraX = Math.floor(revisar_x / 3) * 3;
    const primeraY = Math.floor(revisar_y / 3) * 3;
    const numRevisar = board[revisar_y][revisar_x];

    for (let i = primeraY; i < primeraY + 3; i++) {
        for (let j = primeraX; j < primeraX + 3; j++) {
            if (i !== revisar_y || j !== revisar_x) { // Verificar si la posición actual no es la posición a revisar
                if (board[i][j] === numRevisar) {   // Verificar si el valor en la posición actual es igual al valor a revisar
                    return false;                   // Si encuentra uno igual, retornar false
                }
            }
        }
    }
    return true; // Si no encuentra ningún número igual, retornar true
}

function esValido(board,y,x){
    if(revisar_eje_x(board,y,x) && revisar_eje_y(board,y,x) && revisar_submatriz(board,y,x) === true ){
        return true
    }
    else {
        return false
    }
}

/**
 * Funcion para revolver un array de numeros de forma aleatoria
 * @param {array} array 
 */
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

/**
 * Funcion para resolver el sudoku por backtraking y se vizualiza en pantalla
 * @param {array*} board 
 * @param {string*} nombreDado nombre del sudoku (ej: C para el centro)
 * @returns array del sudoku, o false en caso de no resolverlo
 */
async function resolverSudokuBack(board,nombreSudoku){

    for (let y = 0; y < board.length; y++) {
        for (let x = 0; x < board[y].length; x++) {                         //ciclo x y

            cuadrado = nombreSudoku + y.toString() + x.toString();          //para obtner la casilla y luego cambiar el color, ej: C00, C01

                if (board[y][x] === null) {                                 // si la casilla no tiene numero

                    let nums = [1,2,3,4,5,6,7,8,9];
                    shuffle(nums);                                          // tiro shuffle al array de nums  

                    for(let i=0; i< nums.length;i++){                                                            // pruebo los numeros del array
                        board[y][x] = nums[i];                              // seteo la casilla en el numero
                        if (esValido(board, y, x)) { 
                            //para que se muestre en pantalla                         
                            actulizaCuadrado(cuadrado);                       //actualiza el cuadrado momentaneamente en rojo
                            actualizarPantalla(board,nombreSudoku);           //esto es para visualizar el cambio en el tablero externamente
                            await sleep(200);                                 //sin este se muestra todos los cambios de una vez
                            if (resolverSudokuBack(board,nombreSudoku)) {     // recursivo 
                                return board;
                            }
                        }
                        board[y][x] = null;                                   // si no es posible devuelvo el valor a null 
                    }
                    return false;                                             // si no se puede resolver
                }
        }
    }
    return board;                       // retorno la matriz
}

// --------------------------------------------------------------------
//  FINAL CODIGO BACKTRACKING 
//---------------------------------------------------------------------

// --------------------------------------------------------------------
// CODIGO PARA COMPROBAR EL ESTADO DEL SUDOKU 
//---------------------------------------------------------------------

/**
 * Las siguientes 3 funciones son para la ventana de error, la cual muestra en patanlla un mensaje y tambien activa y desactiva botones
 */
function cerrarVentanaError() {
    document.getElementById("mensaje-error").style.display = "none";
    activaBotones()
}
function activaBotones(){
    document.getElementById('generar').disabled = false;
    document.getElementById('resolvA').disabled = false;
    document.getElementById('resolvBack').disabled = false;
    document.getElementById('limpiar').disabled = false;
    document.getElementById('verificaNum').disabled = false;
}
function desactivaBotones(){
    document.getElementById('generar').disabled = true;
    document.getElementById('resolvA').disabled = true;
    document.getElementById('resolvBack').disabled = true;
    document.getElementById('limpiar').disabled = true;
    document.getElementById('verificaNum').disabled = true;
}

/**
 * Funcion para eliminar el numero dentro de la submatriz 3x3
 * @param {*} matriz 
 * @param {*} i 
 * @param {*} j 
 * @param {*} num 
 */
function eliminarNumeroRepetido(matriz, i, j, num) {
    matriz[i][j] = null;
    // Recorre la submatriz 3x3 y elimina el número repetido, pone null
    for (let m = i; m < i + 3; m++) {
        for (let n = j; n < j + 3; n++) {
            if (matriz[m][n] === num) {
                matriz[m][n] = null;
            }
        }
    }
}
/**
 * Funcion para verificar si un numero se repite dentro de una submatriz
 * @param {*} matriz 
 * @returns 
 */
function verificarSubmatrices(matriz) {
    for (let i = 0; i < 9; i += 3) { // Recorre cada submatriz 3x3 de la matriz
        for (let j = 0; j < 9; j += 3) {
            const submatriz = []; // para crear una submatriz 3x3 a partir de la matriz principal
            for (let k = i; k < i + 3; k++) {
                submatriz.push(matriz[k].slice(j, j + 3));
            }       
            for (let num = 1; num <= 9; num++) { // Verifica si algún número del 1 al 9 se repite dentro de la submatriz
                let repite = false;
                for (let m = 0; m < 3; m++) {
                    for (let n = 0; n < 3; n++) {
                        if (submatriz[m][n] === num) {
                            if (repite) { // Si se encontró el número repetido, eliminarlo de la matriz y retorna false
                                eliminarNumeroRepetido(matriz, i + m, j + n, num);
                                return false; 
                            } 
                            else {
                                repite = true; // Si es la primera vez que se encuentra el número, establece el flag repite a true
                            }
                        }
                    }
                }
            }
        }
    }
    // Si no se encontraron números repetidos en ninguna submatriz, retorna true
    return true;
}

/**
 *  Funcion para verificar si los numeros se repiten internamente en el codigo, si se repiten, se elimina y se muestra que habia un error
 * @param {arra} matriz 
 * @returns 
 */
function verificarNumeros(matriz, nombreCuadrados) {

    var error = false;
    // Verificar repetición en filas
    for (var fila = 0; fila < 9; fila++) {
        for (var columna = 0; columna < 9; columna++) {
            var numeroActual = matriz[fila][columna];
            if (numeroActual != null) { // Verificar si el valor actual no es nulo
                for (var i = 0; i < 9; i++) {
                    if (i != columna && matriz[fila][i] == numeroActual) { //ENCONTRO QUE EL NUMERO SE REPITE
                        matriz[fila][i] = null;         //SE HACE QUE EL NUMERO NO SE ESCRIBA
                        error = true
                        break
                    }
                }
            }
        }
    }

    // Verificar repetición en columnas
    for (var columna = 0; columna < 9; columna++) {
        for (var fila = 0; fila < 9; fila++) {
            var numeroActual = matriz[fila][columna];
            if (numeroActual != null) { // Verificar si el valor actual no es nulo
                for (var i = 0; i < 9; i++) {
                    if (i != fila && matriz[i][columna] == numeroActual) {
                        matriz[i][columna] = null;         //SE HACE QUE EL NUMERO NO SE ESCRIBA
                        error = true
                        break
                    }
                }
            }
        }
    }

    if(verificarSubmatrices(matriz) === false){  //verifica las submatrices y tambien elimina luego el elemento si se repite
        error = true
    }
    
    if(error){
        document.getElementById("mensaje-error").style.display = "block";   //mensaje de error
        desactivaBotones()
        actualizarPantalla(matriz,nombreCuadrados)
        
        return
    }

    return //return, no existen numeros repetidos
}
// --------------------------------------------------------------------
// FIN DEL CODIGO PARA COMPROBAR EL ESTADO DEL SUDOKU 
//---------------------------------------------------------------------


/*===========================================================================================================================================
Funciones de los botones para la interfaz
=============================================================================================================================================*/
/**
 * Funcion para generar los tableros aletoriamente y tambien se muestre en pantalla
 */
function generarTableros(){
    limpiarSudoku();
    //Se generan los sudokus
    sudokuTopLeft = generarSudoku();
    sudokuTopRight = generarSudoku();
    sudokuCenter = generarSudoku();
    sudokuBottLeft = generarSudoku();
    sudokuBottRight = generarSudoku();

    //se agregan a la interfaz
    for (var x = 0; x < 5; x++) {                           
        if(x === 0){                //SUDOKU TopLeft
            for (var filas = 0; filas < 9; filas++) {                           
                for (var columnas = 0; columnas < 9; columnas++) {     
                    nombre = "TL" + filas.toString() + columnas.toString();
                    let input = document.getElementById(nombre);      
                    input.value = sudokuTopLeft[filas][columnas];
                }
            }
        }
        if(x === 1){                //SUDOKU TopRight
            for (var filas = 0; filas < 9; filas++) {                           
                for (var columnas = 0; columnas < 9; columnas++) {     
                    nombre = "TR" + filas.toString() + columnas.toString();
                    let input = document.getElementById(nombre);      
                    input.value = sudokuTopRight[filas][columnas];
                }
            }
        }
        if(x === 2){                //SUDOKU Center
            for (var filas = 0; filas < 9; filas++) {                           
                for (var columnas = 0; columnas < 9; columnas++) {     
                    nombre = "C" + filas.toString() + columnas.toString();
                    let input = document.getElementById(nombre);      
                    input.value = sudokuCenter[filas][columnas];
                }
            }
        }
        if(x === 3){                //SUDOKU BottLEFT
            for (var filas = 0; filas < 9; filas++) {                           
                for (var columnas = 0; columnas < 9; columnas++) {     
                    nombre = "BL" + filas.toString() + columnas.toString();
                    let input = document.getElementById(nombre);      
                    input.value = sudokuBottLeft[filas][columnas];
                }
            }
        }
        if(x === 4){                //SUDOKU BottRight
            for (var filas = 0; filas < 9; filas++) {                           
                for (var columnas = 0; columnas < 9; columnas++) {     
                    nombre = "BR" + filas.toString() + columnas.toString();
                    let input = document.getElementById(nombre);      
                    input.value = sudokuBottRight[filas][columnas];
                }
            }
        }
    }
}

/**
 * Funcion para limpiar el sudoku
 */
function limpiarSudoku(){
    //limpia exteriormente
    for (var x = 0; x < 5; x++) {                           
        if(x === 0){                //SUDOKU TopLeft
            for (var filas = 0; filas < 9; filas++) {                           
                for (var columnas = 0; columnas < 9; columnas++) {     
                    nombre = "TL" + filas.toString() + columnas.toString();
                    let input = document.getElementById(nombre);      
                    input.style.backgroundColor = "black";
                    input.value = null;
                    sudokuTopLeft[filas][columnas] = null;//limpia internamente
                }
            }
        }
        if(x === 1){                //SUDOKU TopRight
            for (var filas = 0; filas < 9; filas++) {                           
                for (var columnas = 0; columnas < 9; columnas++) {     
                    nombre = "TR" + filas.toString() + columnas.toString();
                    let input = document.getElementById(nombre);      
                    input.style.backgroundColor = "black";
                    input.value = null;
                    sudokuTopRight[filas][columnas] = null;//limpia internamente
                }
            }
        }
        if(x === 2){                //SUDOKU Center
            for (var filas = 0; filas < 9; filas++) {                           
                for (var columnas = 0; columnas < 9; columnas++) {     
                    nombre = "C" + filas.toString() + columnas.toString();
                    let input = document.getElementById(nombre);      
                    input.style.backgroundColor = "black";
                    input.value = null;
                    sudokuCenter[filas][columnas] = null;//limpia internamente
                }
            }
        }
        if(x === 3){                //SUDOKU BottLEFT
            for (var filas = 0; filas < 9; filas++) {                           
                for (var columnas = 0; columnas < 9; columnas++) {     
                    nombre = "BL" + filas.toString() + columnas.toString();
                    let input = document.getElementById(nombre);     
                    input.style.backgroundColor = "black"; 
                    input.value = null;
                    sudokuBottLeft[filas][columnas] = null;//limpia internamente
                }
            }
        }
        if(x === 4){                //SUDOKU BottRight
            for (var filas = 0; filas < 9; filas++) {                           
                for (var columnas = 0; columnas < 9; columnas++) {     
                    nombre = "BR" + filas.toString() + columnas.toString();
                    let input = document.getElementById(nombre);      
                    input.style.backgroundColor = "black";
                    input.value = null;
                    sudokuBottRight[filas][columnas] = null;//limpia internamente
                }
            }
        }
    }
}

/**
 * Funcion para resolver los sudokus por backtraking
 */
async function  resolverBacktracking(){
    console.log("entre a backtracking")

    resolverSudokuBack(sudokuCenter,"C")
    await sleep(1000);
    actualizarEsquinas()

    resolverSudokuBack(sudokuTopLeft, "TL")
    resolverSudokuBack(sudokuTopRight, "TR")
    resolverSudokuBack(sudokuBottLeft, "BL")
    resolverSudokuBack(sudokuBottRight, "BR")

    //await sleep(2000)
}

/**
 * Funcion que escribe los numeros del sudoku externo dentro del interior y luego verifica que no se repitan
 * si es necesario, se puede llamar varias veces
 */
function compruebaSudoku(){

    for (var x = 0; x < 5; x++) {                           
        if(x === 0){                //SUDOKU TopLeft
            for (var filas = 0; filas < 9; filas++) {                           
                for (var columnas = 0; columnas < 9; columnas++) {     
                    nombre = "TL" + filas.toString() + columnas.toString();
                    
                    let cuadrado = document.getElementById(nombre);             //obtengo el cuadro
                    num = parseInt(cuadrado.value);                             //obtiene el valor del input 

                    if(!isNaN(num)){                                            //para no dar error
                        sudokuTopLeft[filas][columnas] = num;                    //se ingresa el numero
                    }
                    else{                                                       //en el caso de que el usuario borre los numeros
                        sudokuTopLeft[filas][columnas] = null;
                    }
                }
            }
        }
        if(x === 1){                //SUDOKU TopRight
            for (var filas = 0; filas < 9; filas++) {                           
                for (var columnas = 0; columnas < 9; columnas++) {     
                    nombre = "TR" + filas.toString() + columnas.toString();
                    
                    let cuadrado = document.getElementById(nombre);             //obtengo el cuadro
                    num = parseInt(cuadrado.value);                             //obtiene el valor del input 

                    if(!isNaN(num)){                                            //para no dar error
                        sudokuTopRight[filas][columnas] = num;                    //se ingresa el numero
                    }
                    else{                                                       //en el caso de que el usuario borre los numeros
                        sudokuTopRight[filas][columnas] = null;
                    }
                }
            }
        }
        if(x === 2){                //SUDOKU Center
            for (var filas = 0; filas < 9; filas++) {                           
                for (var columnas = 0; columnas < 9; columnas++) {     

                    nombre = "C" + filas.toString() + columnas.toString();      //obtengo el nombre del cuadro

                    let cuadrado = document.getElementById(nombre);             //obtengo el cuadro
                    num = parseInt(cuadrado.value);                             //obtiene el valor del input 

                    if(!isNaN(num)){                                            //para no dar error
                        sudokuCenter[filas][columnas] = num;                    //se ingresa el numero
                    }
                    else{                                                       //en el caso de que el usuario borre los numeros
                        sudokuCenter[filas][columnas] = null;
                    }
                }
            }
        }
        if(x === 3){                //SUDOKU BottLEFT
            for (var filas = 0; filas < 9; filas++) {                           
                for (var columnas = 0; columnas < 9; columnas++) {     
                    nombre = "BL" + filas.toString() + columnas.toString();

                    let cuadrado = document.getElementById(nombre);             //obtengo el cuadro
                    num = parseInt(cuadrado.value);                             //obtiene el valor del input 

                    if(!isNaN(num)){                                            //para no dar error
                        sudokuBottLeft[filas][columnas] = num;                    //se ingresa el numero
                    }
                    else{                                                       //en el caso de que el usuario borre los numeros
                        sudokuBottLeft[filas][columnas] = null;
                    }
                }
            }
        }
        if(x === 4){                //SUDOKU BottRight
            for (var filas = 0; filas < 9; filas++) {                           
                for (var columnas = 0; columnas < 9; columnas++) {     
                    nombre = "BR" + filas.toString() + columnas.toString();

                    let cuadrado = document.getElementById(nombre);             //obtengo el cuadro
                    num = parseInt(cuadrado.value);                             //obtiene el valor del input 

                    if(!isNaN(num)){                                            //para no dar error
                        sudokuBottRight[filas][columnas] = num;                    //se ingresa el numero
                    }
                    else{                                                       //en el caso de que el usuario borre los numeros
                        sudokuBottRight[filas][columnas] = null;
                    }
                }
            }
        }
    }

    //se llama esta funcion para verificar los numeros escritos, si es necesario se usa varias veces
    actualizarEsquinas()
    verificarNumeros(sudokuTopLeft,"TL");
    verificarNumeros(sudokuTopRight,"TR");
    verificarNumeros(sudokuCenter,"C");
    verificarNumeros(sudokuBottLeft,"BL");
    verificarNumeros(sudokuBottRight,"BR");
}

/*===========================================================================================================================================
FINAL DE Funciones de los botones para la interfaz
=============================================================================================================================================*/


