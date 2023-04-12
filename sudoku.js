
/**
 * Crea los cuadros del sudoku
 */
window.onload = function() {
    crearInterfaz();
}

// TABLEROS // 
//son tableros 9x9 rellenados con null
var sudokuTopLeft = creaSudoku();      

var sudokuTopRight = creaSudoku();

var sudokuCenter = creaSudoku();

var sudokuBottLeft = creaSudoku();

var sudokuBottRight = creaSudoku();


/*============================================================================================================/
 * Funciones para la creacion del sudoku Vizualmente entre otro apartado vizual
=============================================================================================================*/

/**
 * Funcion para crear los cuadros del sudoku
 */
function crearInterfaz(){

    //CICLO PARA CREAR LOS 5 CUADROS GRANDES
    for (var x = 0; x < 5; x++) {                           
        if(x === 0){                //SUDOKU TopLeft
            var tabla = document.createElement("table");
            var tbody = document.createElement("tbody");

            for (var columna = 0; columna < 9; columna++) {             //crea columnas
                var tr = document.createElement("tr");
                for (var fila = 0; fila < 9; fila++) {                  //crea filas 
                    var td = document.createElement("td");              //va creando las filas
                    var numero = document.createElement("input");       //el cuadro para escribir el numero
                    
                    
                    //pone las lineas horizontales
                    if (columna  === 2 || columna === 5){
                        numero.style.borderBottom = '6px solid aqua';
                    }
                    if (columna  === 3 || columna  === 6){
                        numero.style.borderTop = '6px solid aqua';
                    }

                    //pone las linea verticales
                    if (fila  === 2 || fila === 5){
                        numero.style.borderRight = '6px solid aqua';
                    }
                    if (fila  === 3 || fila === 6){
                        numero.style.borderLeft = '6px solid aqua';
                    }

                    numero.type = "number";                              //hace el cuadro de tipo numerico
                    nombre = "TL" + columna.toString() + fila.toString();//Crea el id, ej: C00,C01,C02 hasta C88
                    numero.id = nombre;

                    if (fila >= 6 && columna >= 6){
                        numero.type = "hidden";  
                    }

                    tr.appendChild(numero);                             //agrega el cuadro a la fila
                    tr.appendChild(td);                                 //se agrega el elemento de la fila al tr, va desde el index 0 hasta el 9
                }
                tbody.appendChild(tr);                                  //se agrega la fila a la tabla
            }
            tabla.appendChild(tbody);

            document.getElementById("boardTopLeft").appendChild(tabla);
        }
        if(x === 1){                //SUDOKU TopRight
            var tabla = document.createElement("table");
            var tbody = document.createElement("tbody");

            for (var columna = 0; columna < 9; columna++) {                 //crea columnas
                var tr = document.createElement("tr");                      //crea filas
                for (var fila = 0; fila < 9; fila++) {    
                    var td = document.createElement("td");                   //va creando las filas
                    var numero = document.createElement("input");           //el cuadro para escribir el numero   

                    //pone las lineas horizontales
                    if (columna  === 2 || columna === 5){
                        numero.style.borderBottom = '6px solid aqua';
                    }
                    if (columna  === 3 || columna  === 6){
                        numero.style.borderTop = '6px solid aqua';
                    }

                    //pone las linea verticales
                    if (fila  === 2 || fila === 5){
                        numero.style.borderRight = '6px solid aqua';
                    }
                    if (fila  === 3 || fila === 6){
                        numero.style.borderLeft = '6px solid aqua';
                    }

                    numero.type = "number";    
                    nombre = "TR" + columna.toString() + fila.toString();
                    numero.id = nombre; 

                    if (columna >= 6 && fila <= 2) {                        //para no crear cuadros de mas
                        numero.type = "hidden";                             //oculta los cuadros
                    } 
                    
                    td.appendChild(numero);
                    tr.appendChild(td);
                }
                tbody.appendChild(tr);//se agrega la fila a la tabla
            }
            tabla.appendChild(tbody);

            document.getElementById("boardTopRight").appendChild(tabla);
        }
        if(x === 2){                //SUDOKU Center
            var tabla = document.createElement("table");
            var tbody = document.createElement("tbody");

            for (var columna = 0; columna < 9; columna++) {             //crea columnas
                var tr = document.createElement("tr");
                for (var fila = 0; fila < 9; fila++) {                  //crea filas
                    var td = document.createElement("td");              //va creando las filas
                    var numero = document.createElement("input");       //el cuadro para escribir el numero

                    //pone las lineas horizontales
                    if (columna  === 2 || columna === 5){
                        numero.style.borderBottom = '6px solid aqua';
                    }
                    if (columna  === 3 || columna  === 6){
                        numero.style.borderTop = '6px solid aqua';
                    }

                    //pone las linea verticales
                    if (fila  === 2 || fila === 5){
                        numero.style.borderRight = '6px solid aqua';
                    }
                    if (fila  === 3 || fila === 6){
                        numero.style.borderLeft = '6px solid aqua';
                    }

                    numero.type = "number";                             //tipo numerico
                    nombre = "C" + columna.toString() + fila.toString();//Crea el id, ej: C00,C01,C02 hasta C88
                    numero.id = nombre;   

                    td.appendChild(numero);                             //agrega el cuadro a la fila
                    tr.appendChild(td);                                 //se agrega el elemento de la fila al tr, va desde el index 0 hasta el 9
                }
                tbody.appendChild(tr);                                  //se agrega la fila a la tabla
            }
            tabla.appendChild(tbody);

            document.getElementById("boardCenter").appendChild(tabla);
        }
        if(x === 3){                //SUDOKU BottLEFT
            var tabla = document.createElement("table");
            var tbody = document.createElement("tbody");

            for (var columna = 0; columna < 9; columna++) {                 //crea columnas
                var tr = document.createElement("tr");
                for (var fila = 0; fila < 9; fila++) {                      //crea filas 
                    var td = document.createElement("td");                  //va creando las filas
                    var numero = document.createElement("input");           //el cuadro para escribir el numero
                    
                    //pone las lineas horizontales
                    if (columna  === 2 || columna === 5){
                        numero.style.borderBottom = '6px solid aqua';
                    }
                    if (columna  === 3 || columna  === 6){
                        numero.style.borderTop = '6px solid aqua';
                    }

                    //pone las linea verticales
                    if (fila  === 2 || fila === 5){
                        numero.style.borderRight = '6px solid aqua';
                    }
                    if (fila  === 3 || fila === 6){
                        numero.style.borderLeft = '6px solid aqua';
                    }

                    numero.type = "number"; 
                    nombre = "BL" + columna.toString() + fila.toString();   //Crea el id, ej: C00,C01,C02 hasta C88
                    numero.id = nombre; 

                    if (fila >= 6 && columna <= 2) { 
                        numero.type = "hidden";  
                    }

                    tr.appendChild(numero);                                 //agrega el cuadro a la fila
                    tr.appendChild(td);                                     //se agrega el elemento de la fila al tr, va desde el index 0 hasta el 9
                }
                tbody.appendChild(tr);                                      //se agrega la fila a la tabla
            }
            tabla.appendChild(tbody);

            document.getElementById("boardBottLeft").appendChild(tabla);
        }
        if(x === 4){                //SUDOKU BottRight
            var tabla = document.createElement("table");
            var tbody = document.createElement("tbody");
        
            for (var columna = 0; columna < 9; columna++) {                 //crea columnas
                var tr = document.createElement("tr");
                for (var fila = 0; fila < 9; fila++) {                      //crea filas
                    var td = document.createElement("td");                  //va creando las filas
                    var numero = document.createElement("input");           //el cuadro para escribir el numero
        
                    //pone las lineas horizontales
                    if (columna  === 2 || columna === 5){
                        numero.style.borderBottom = '6px solid aqua';
                    }
                    if (columna  === 3 || columna  === 6){
                        numero.style.borderTop = '6px solid aqua';
                    }

                    //pone las linea verticales
                    if (fila  === 2 || fila === 5){
                        numero.style.borderRight = '6px solid aqua';
                    }
                    if (fila  === 3 || fila === 6){
                        numero.style.borderLeft = '6px solid aqua';
                    }
                    
                    numero.type = "number";    
                    nombre = "BR" + columna.toString() + fila.toString();   //Crea el id, ej: C00,C01,C02 hasta C88
                    numero.id = nombre;
        
                    if (columna <= 2 && fila <= 2) {                         //para no crear cuadros de mas
                        numero.type = "hidden";                             //oculta los cuadros
                    } 
        
                    td.appendChild(numero);
                    tr.appendChild(td);
                }
                tbody.appendChild(tr);//se agrega la fila a la tabla
            }
            tabla.appendChild(tbody);
        
            document.getElementById("boardBottRight").appendChild(tabla);
        }
    }
}

/**
 * Funcion para visualizar los cambios hechos
 * @param {array*} tablero el tablero que se desea hacer el cambio, es el tablero interno
 * @param {string*} nombre para obtener cual tablero se desea cambiar (ej: C del centro)
 */
function actualizarPantalla(tablero,nombre){
    for (var filas = 0; filas < 9; filas++) {                           
        for (var columnas = 0; columnas < 9; columnas++) {     
            cuadrado = nombre + filas.toString() + columnas.toString();     //para obtener el id del cuadro
            let input = document.getElementById(cuadrado);                  //crea el input con el id
            input.value = tablero[filas][columnas];                         //cambia en pantalla
        }
    }
}

/**
 * Funcion para hacer los procesos en tiempo real
 * @param {number*} ms 
 * @returns tiempo
 */
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Funcion para actualizar el cuadrado exterior momentaneamente en rojo
 * @param {string*} cuadrado nombre del cuadrado, ej: C00, C01
 */
async function actulizaCuadrado(cuadrado){
    let input = document.getElementById(cuadrado);
    input.style.backgroundColor = "red";                             //esto es para visualizar el cambio en el tablero externamente
    await sleep(200);
    input.style.backgroundColor = "black";
}

/*============================================================================================================/
 * Funciones para la creacion del sudoku interno y algunas verificaciones
=============================================================================================================*/

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
 * Funcion para verificar si un numero es valido en cierta posicion (pertenece al de generar sudokus)
 * @param {array*} sudoku 
 * @param {number*} fila 
 * @param {number*} columna 
 * @param {number*} num 
 * @returns true, el numero es valido
 */
function esValidoGenerador(sudoku, fila, columna, num) {
    for (let i = 0; i < 9; i++) {
        if (sudoku[fila][i] === num || sudoku[i][columna] === num) {
        return false;
        }
    }
    // Verifica si el número ya está en el cuadrado 3x3 actual
    let filaInicio = Math.floor(fila / 3) * 3;
    let columnaInicio = Math.floor(columna / 3) * 3;

    for (let i = filaInicio; i < filaInicio + 3; i++) {
        for (let j = columnaInicio; j < columnaInicio + 3; j++) {
            if (sudoku[i][j] === num) {
                return false;
            }
        }
    }
    return true; //el numero es valido
}

/**
 * Funcion para generar sudokus aleatorios internamente en el codigo
 * @returns sudoku (matriz 9x9 de numeros aleatorios, con espacios en null para completarlo)
 */
function generarSudoku() {
    let sudoku = [];
    for (let i = 0; i < 9; i++) {                   // Crear una matriz 9x9 para el Sudoku vacío
        sudoku.push(new Array(9).fill(null));
    }
    // Función para generar un número aleatorio que no se repita en una fila o columna
    function generarNumeroNoRepetido(fila, columna) {
        let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        while (numeros.length > 0) {
            let indice = Math.floor(Math.random() * numeros.length);
            let num = numeros[indice];
            numeros.splice(indice, 1);
            if (esValidoGenerador(sudoku, fila, columna, num)) {
                return num;
            }
        }
        return null;
    }
    // Se llena el Sudoku celda por celda
    for (var columna = 0; columna < 9; columna++) {                             //crea Columnas
        for (var fila = 0; fila < 9; fila++) {                                  //crea Filas 
            sudoku[fila][columna] = generarNumeroNoRepetido(fila, columna);     // Se genera un número aleatorio para la celda
            // Se vacía la celda con una probabilidad aleatoria
            if (Math.random() < 0.9) { //CON ESTE PRACTICAMENTE SE CAMBIA LA DIFICULTAD, SE HACEN MENOS O MAS NUMEROS
                sudoku[fila][columna] = null;
            }
        }
    }
    return sudoku;  // Se devuelve el Sudoku generado
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
    console.log("TL")
    console.log(sudokuTopLeft)
    console.log("TR")
    console.log(sudokuTopRight)
    console.log("BT")
    console.log(sudokuBottLeft)
    console.log("BR")
    console.log(sudokuBottRight)
}

/*============================================================================================================/
 * FINAL de Funciones para la creacion del sudoku interno y algunas verificaciones
=============================================================================================================*/


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

/**
 * Funcion para imprimir el sudoku en la consola
 * @param {matriz} board 
 */
function imprimirSudoku(board) {
    console.log("  1 2 3   4 5 6   7 8 9"); // imprimir los encabezados de columna
    console.log("+-------+-------+-------+");

    for (let i = 0; i < 9; i++) {
        let rowStr = "";
            for (let j = 0; j < 9; j++) {
                if (j % 3 === 0) {
                    rowStr += "| ";
                }
                const val = board[i][j] === 0 ? " " : board[i][j];
                rowStr += `${val} `;
            }
            rowStr += "|";
            console.log(`${i+1} ${rowStr}`);
            if ((i + 1) % 3 === 0) {
                console.log("+-------+-------+-------+");
            }
    }
}

// --------------------------------------------------------------------
//  FINAL CODIGO BACKTRACKING 
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
    /**
     * falta las submatriz
     */

    if(error){
        document.getElementById("mensaje-error").style.display = "block";   //mensaje de error
        desactivaBotones()
        actualizarPantalla(matriz,nombreCuadrados)
        return
    }
    
    //document.getElementById("mensaje").style.display = "block";   //mensaje normal
    return
    //return, no existen numeros repetidos
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
    verificarNumeros(sudokuTopLeft,"TL");
    verificarNumeros(sudokuTopRight,"TR");
    verificarNumeros(sudokuCenter,"C");
    verificarNumeros(sudokuBottLeft,"BL");
    verificarNumeros(sudokuBottRight,"BR");
}

/*===========================================================================================================================================
FINAL DE Funciones de los botones para la interfaz
=============================================================================================================================================*/



