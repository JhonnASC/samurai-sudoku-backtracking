
/**
 * Crea los cuadros del sudoku
 */
window.onload = function() {
    creatTopLeft();
    creatTopRight();
    creatCenter();
    creatBottLeft();
    creatBottRight();
}

// TABLEROS // 
const sudokuTopLeft = [                 
[null, null, null, null, null, null, null, null, null],
[null, null, null, null, null, null, null, null, null],
[null, null, null, null, null, null, null, null, null],
[null, null, null, null, null, null, null, null, null],
[null, null, null, null, null, null, null, null, null],
[null, null, null, null, null, null, null, null, null],
[null, null, null, null, null, null, null, null, null],
[null, null, null, null, null, null, null, null, null],
[null, null, null, null, null, null, null, null, null],
];

const sudokuTopRight = [               
[null, null, null, null, null, null, null, null, null],
[null, null, null, null, null, null, null, null, null],
[null, null, null, null, null, null, null, null, null],
[null, null, null, null, null, null, null, null, null],
[null, null, null, null, null, null, null, null, null],
[null, null, null, null, null, null, null, null, null],
[null, null, null, null, null, null, null, null, null],
[null, null, null, null, null, null, null, null, null],
[null, null, null, null, null, null, null, null, null],
];
const sudokuCenter = [            
[null, null, null, null, null, null, null, null, null],
[null, null, null, null, null, null, null, null, null],
[null, null, null, null, null, null, null, null, null],
[null, null, null, null, null, null, null, null, null],
[null, null, null, null, null, null, null, null, null],
[null, null, null, null, null, null, null, null, null],
[null, null, null, null, null, null, null, null, null],
[null, null, null, null, null, null, null, null, null],
[null, null, null, null, null, null, null, null, null],
];
const sudokuBottLeft = [              
[null, null, null, null, null, null, null, null, null],
[null, null, null, null, null, null, null, null, null],
[null, null, null, null, null, null, null, null, null],
[null, null, null, null, null, null, null, null, null],
[null, null, null, null, null, null, null, null, null],
[null, null, null, null, null, null, null, null, null],
[null, null, null, null, null, null, null, null, null],
[null, null, null, null, null, null, null, null, null],
[null, null, null, null, null, null, null, null, null],
];

const sudokuBottRight = [              
[null, null, null, null, null, null, null, null, null],
[null, null, null, null, null, null, null, null, null],
[null, null, null, null, null, null, null, null, null],
[null, null, null, null, null, null, null, null, null],
[null, null, null, null, null, null, null, null, null],
[null, null, null, null, null, null, null, null, null],
[null, null, null, null, null, null, null, null, null],
[null, null, null, null, null, null, null, null, null],
[null, null, null, null, null, null, null, null, null],
];


/************************************************************************************************************
 * Funciones para la creacion del sudoku y algunos apartados visuales
 ***********************************************************************************************************/

function creatTopLeft() {
    var tabla = document.createElement("table");
    var tbody = document.createElement("tbody");

    for (var columna = 0; columna < 9; columna++) {             //crea columnas
        var tr = document.createElement("tr");
        for (var fila = 0; fila < 9; fila++) {                  //crea filas 
            var td = document.createElement("td");              //va creando las filas
            var numero = document.createElement("input");       //el cuadro para escribir el numero
            
            numero.type = "number";                              //hace el cuadro de tipo numerico
            nombre = "TL" + fila.toString() + columna.toString();//Crea el id, ej: C00,C01,C02 hasta C88
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

function creatTopRight() {
    var tabla = document.createElement("table");
    var tbody = document.createElement("tbody");

    for (var columna = 0; columna < 9; columna++) {                 //crea columnas
        var tr = document.createElement("tr");                      //crea filas
        for (var fila = 0; fila < 9; fila++) {    
            var td = document.createElement("td");                   //va creando las filas
            var numero = document.createElement("input");           //el cuadro para escribir el numero   

            numero.type = "number";    
            nombre = "TR" + fila.toString() + columna.toString();
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

function creatCenter() {
    var tabla = document.createElement("table");
    var tbody = document.createElement("tbody");

    for (var columna = 0; columna < 9; columna++) {             //crea columnas
        var tr = document.createElement("tr");
        for (var fila = 0; fila < 9; fila++) {                  //crea filas
            var td = document.createElement("td");              //va creando las filas
            var numero = document.createElement("input");       //el cuadro para escribir el numero
            
            numero.type = "number";                             //tipo numerico
            nombre = "C" + fila.toString() + columna.toString();//Crea el id, ej: C00,C01,C02 hasta C88
            numero.id = nombre;   

            td.appendChild(numero);                             //agrega el cuadro a la fila
            tr.appendChild(td);                                 //se agrega el elemento de la fila al tr, va desde el index 0 hasta el 9
        }
        tbody.appendChild(tr);                                  //se agrega la fila a la tabla
    }
    tabla.appendChild(tbody);

    document.getElementById("boardCenter").appendChild(tabla);
}

function creatBottLeft() {
    var tabla = document.createElement("table");
    var tbody = document.createElement("tbody");

    for (var columna = 0; columna < 9; columna++) {                 //crea columnas
        var tr = document.createElement("tr");
        for (var fila = 0; fila < 9; fila++) {                      //crea filas 
            var td = document.createElement("td");                  //va creando las filas
            var numero = document.createElement("input");           //el cuadro para escribir el numero
            
            numero.type = "number"; 
            nombre = "BL" + fila.toString() + columna.toString();   //Crea el id, ej: C00,C01,C02 hasta C88
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

function creatBottRight() {
    var tabla = document.createElement("table");
    var tbody = document.createElement("tbody");

    for (var columna = 0; columna < 9; columna++) {                 //crea columnas
        var tr = document.createElement("tr");
        for (var fila = 0; fila < 9; fila++) {                      //crea filas
            var td = document.createElement("td");                  //va creando las filas
            var numero = document.createElement("input");           //el cuadro para escribir el numero

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
/*
function prueba()
{
    let input = document.getElementById("C00");
    input.style.backgroundColor = "red";
}
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
 * @param {string} nombreSudoku 
 * @returns sudoku (matriz 9x9 de numeros aleatorios, con espacios en null para completarlo)
 */
function generarSudoku1() {
    // Crear una matriz 9x9 para el Sudoku vacío
    let sudoku = [];
    for (let i = 0; i < 9; i++) {
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
    for (var columna = 0; columna < 9; columna++) {             //crea Columnas
        for (var fila = 0; fila < 9; fila++) {                  //crea Filas
            // Se genera un número aleatorio para la celda
            sudoku[fila][columna] = generarNumeroNoRepetido(fila, columna);
            // Se vacía la celda con una probabilidad aleatoria
            if (Math.random() < 0.4) { //CON ESTE PRACTICAMENTE SE CAMBIA LA DIFICULTAD, SE HACEN MENOS O MAS NUMEROS
                sudoku[fila][columna] = null;
            }
        }
    }
    // Se devuelve el Sudoku generado
    return sudoku;
}

/**
 * Funcion para limpiar el sudoku
 */
function limpiarSudoku(){
    for (var filas = 0; filas < 9; filas++) {                           
        for (var columnas = 0; columnas < 9; columnas++) {     
            nombre = "TL" + filas.toString() + columnas.toString();
            let input = document.getElementById(nombre);      
            input.value = null;
        }
    }

    for (var filas = 0; filas < 9; filas++) {                           
        for (var columnas = 0; columnas < 9; columnas++) {  
            nombre = "TR" + filas.toString() + columnas.toString();              
            let input = document.getElementById(nombre);           
            input.value = null;
        }
    }

    for (var filas = 0; filas < 9; filas++) {                           
        for (var columnas = 0; columnas < 9; columnas++) {              
            nombre = "C" + filas.toString() + columnas.toString();
            let input = document.getElementById(nombre);
            input.value = null;
        }
    }
    
    for (var filas = 0; filas < 9; filas++) {                           
        for (var columnas = 0; columnas < 9; columnas++) {     
            nombre = "BL" + filas.toString() + columnas.toString();
            let input = document.getElementById(nombre);
            input.value = null;
        }
    }

    for (var filas = 0; filas < 9; filas++) {                           
        for (var columnas = 0; columnas < 9; columnas++) {            
            nombre = "BR" + filas.toString() + columnas.toString();
            let input = document.getElementById(nombre);
            input.value = null;
        }
    }
}

/**
 * Funcion para generar que los numeros se vean en la pagina web
 */

function actualizarPantalla(tablero,nombreDado){
for (var filas = 0; filas < 9; filas++) {                           
    for (var columnas = 0; columnas < 9; columnas++) {     
        nombre = nombreDado + filas.toString() + columnas.toString();
        let input = document.getElementById(nombre);      
        input.value = tablero[filas][columnas];
    }

}
}
function generarTableros(){
    let sudokuTopLeft = generarSudoku1();                               //aqui crea un sudoku aletoriamente siempre                                           
    for (var filas = 0; filas < 9; filas++) {                           
        for (var columnas = 0; columnas < 9; columnas++) {     
            nombre = "TL" + filas.toString() + columnas.toString();
            let input = document.getElementById(nombre);      
            input.value = sudokuTopLeft[filas][columnas];
        }

    }

    
    let sudokuTopRight = generarSudoku1();                                //aqui crea un sudoku aletoriamente siempre                                          
        for (var filas = 0; filas < 9; filas++) {                           
            for (var columnas = 0; columnas < 9; columnas++) {  
                nombre = "TR" + filas.toString() + columnas.toString();              
                let input = document.getElementById(nombre);           
                input.value = sudokuTopRight[filas][columnas];
            }
        }
    

    let sudokuCenter = generarSudoku1();                                   //aqui crea un sudoku aletoriamente siempre
    for (var filas = 0; filas < 9; filas++) {                           
        for (var columnas = 0; columnas < 9; columnas++) {              
            nombre = "C" + filas.toString() + columnas.toString();
            let input = document.getElementById(nombre);
            input.value = sudokuCenter[filas][columnas];
        }
    }

    let sudokuBottLeft = generarSudoku1();                                //aqui crea un sudoku aletoriamente siempre                                  
    for (var filas = 0; filas < 9; filas++) {                           
        for (var columnas = 0; columnas < 9; columnas++) {     
            nombre = "BL" + filas.toString() + columnas.toString();
            let input = document.getElementById(nombre);
            input.value = sudokuBottLeft[filas][columnas];
        }
    }
    
    let sudokuBottRight = generarSudoku1();  
    for (var filas = 0; filas < 9; filas++) {                           
        for (var columnas = 0; columnas < 9; columnas++) {            
            nombre = "BR" + filas.toString() + columnas.toString();
            let input = document.getElementById(nombre);
            input.value = sudokuBottRight[filas][columnas];
        }
    }
}

// --------------------------------------------------------------------
// CODIGO BACKTRACKING 
//---------------------------------------------------------------------

<<<<<<< Updated upstream

/**********************************************************************************************************/ 

=======
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
          if (board[i][j] === numRevisar) { // Verificar si el valor en la posición actual es igual al valor a revisar
            return false; // Si encuentra uno igual, retornar false
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
  
  
  function resolverSudoku(board){
    for (let y = 0; y < board.length; y++) {
      for (let x = 0; x < board[y].length; x++) { //ciclo x y
        if (board[y][x] === null) {  // si la casilla no tiene numero
          for (let num = 1; num <= 9; num++) {  // pruebo del 1 al 9
            board[y][x] = num;           // seteo la casilla en el numero
            if (esValido(board, y, x)) { 
              imprimirSudoku(board)      // si la jugada es posible
              if (resolverSudoku(board)) {    // recursivo 
                return board;                
              }
            }
            imprimirSudoku(board)
            board[y][x] = null;                // si no es posible devuelvo el valor a 0 
          }
          return false;                  // si no se puede resolver
        }
      }
    }
    return board;                       // retorno la matriz
  }
  
  
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

function  resolverBacktracking(){

    resolverSudoku(sudokuCenter)
    resolverSudoku(sudokuTopLeft)
    resolverSudoku(sudokuTopRight)
    resolverSudoku(sudokuBottLeft)
    resolverSudoku(sudokuBottRight)


    actualizarPantalla(sudokuCenter,"C")
    actualizarPantalla(sudokuTopLeft,"TL")
    actualizarPantalla(sudokuTopRight,"TR")
    actualizarPantalla(sudokuBottLeft, "BL")
    actualizarPantalla(sudokuBottRight,"BR")
    


}
>>>>>>> Stashed changes
