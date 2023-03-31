const board = [
    [1, 2, 3, 4, 5, 6, 6, 8, 9],
    [0, 3, 0, 0, 7, 1, 0, 4, 0],
    [0, 0, 0, 0, 0, 0, 8, 0, 0],
    [0, 0, 0, 9, 0, 8, 0, 7, 1],
    [1, 0, 3, 0, 0, 0, 0, 0, 0],
    [0, 0, 2, 0, 3, 0, 9, 0, 0],
    [5, 1, 7, 0, 0, 6, 0, 0, 0],
    [2, 0, 0, 0, 0, 0, 7, 0, 0],
    [0, 0, 1, 8, 0, 0, 0, 0, 2],
];

window.onload = function() {
    creatTopLeft();
    creatTopRight();
    creatCenter();
    creatBottLeft();
    creatBottRight();
}

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

function solver(board) {
    for (let x = 0; x < 9; x++) {
        for(let y = 0; y<9; y++){
        }
    }
}

/************************************************************************************************************
 * Funciones para la creacion del sudoku y algunos apartados visuales
 ***********************************************************************************************************/

function creatTopLeft() {
    var tabla = document.createElement("table");
    var tbody = document.createElement("tbody");

    for (var columna = 0; columna < 9; columna++) {             //crea columnas
        var tr = document.createElement("tr");
        for (var fila = 0; fila < 9; fila++) {                  //crea filas 
            if (fila == 6 && columna >= 6){
                break;
            }
            var td = document.createElement("td");              //va creando las filas
            var numero = document.createElement("input");       //el cuadro para escribir el numero
            numero.type = "number";                             //hace el cuadro de tipo numerico
            //numero.id = columna.toString() + fila.toString(); //se crea el id, ej: 00,01,02
            //numero.value = (sudokuTopLeft[columna][fila]);    //con esto se crea el numero del sudoku generado aleatoriamente
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
        var tr = document.createElement("tr");
        for (var fila = 0; fila < 9; fila++) {                      //crea filas
            if (columna >= 6 && fila <= 2) {                        //para no crear cuadros de mas
                var td = document.createElement("td");              //va creando las filas
                var numero = document.createElement("input");       //el cuadro para escribir el numero
                numero.type = "hidden";                             //oculta los cuadros
                //numero.id = columna.toString() + fila.toString();   //se crea el id, ej: 00,01,02
                //numero.value = (sudokuTopRight[columna][fila]);     //con esto se crea el numero del sudoku generado aleatoriamente
                td.appendChild(numero);
                tr.appendChild(td);
            } 
            else{
                var td = document.createElement("td");              //va creando las filas
                var numero = document.createElement("input");       //el cuadro para escribir el numero
                numero.type = "number";    
                //numero.id = columna.toString() + fila.toString();   //se crea el id, ej: 00,01,02
                //numero.value = (sudokuTopRight[columna][fila]);     //con esto se crea el numero del sudoku generado aleatoriamente
                td.appendChild(numero);
                tr.appendChild(td);
            }     
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
            nombre = "C" + columna.toString() + fila.toString();//Crea el id, ej: C00,C01,C02 hasta C88
            numero.id = nombre;   

            //numero.value = (sudokuCenter[columna][fila]);       //con esto se crea el numero del sudoku generado aleatoriamente
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

    for (var columna = 0; columna < 9; columna++) {             //crea columnas
        var tr = document.createElement("tr");
        for (var fila = 0; fila < 9; fila++) {                  //crea filas 
            if (fila == 6 && columna <= 2) { 
                break;
            }
            var td = document.createElement("td");              //va creando las filas
            var numero = document.createElement("input");       //el cuadro para escribir el numero
            numero.type = "number";                             //hace el cuadro de tipo numerico
            //numero.id = columna.toString() + fila.toString();   //se crea el id, ej: 00,01,02
            //numero.value = (sudokuBottLeft[columna][fila]);       //con esto se crea el numero del sudoku generado aleatoriamente
            tr.appendChild(numero);                             //agrega el cuadro a la fila
            tr.appendChild(td);                                  //se agrega el elemento de la fila al tr, va desde el index 0 hasta el 9
        }
        tbody.appendChild(tr);                                  //se agrega la fila a la tabla
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
            if (columna <= 2 && fila <= 2) {                         //para no crear cuadros de mas
                var td = document.createElement("td");              //va creando las filas
                var numero = document.createElement("input");       //el cuadro para escribir el numero
                numero.type = "hidden";                             //oculta los cuadros
                //numero.id = columna.toString() + fila.toString();   //se crea el id, ej: 00,01,02
                //numero.value = (sudokuTopRight[columna][fila]);     //con esto se crea el numero del sudoku generado aleatoriamente
                td.appendChild(numero);
                tr.appendChild(td);
            } 
            else{
                var td = document.createElement("td");              //va creando las filas
                var numero = document.createElement("input");       //el cuadro para escribir el numero
                numero.type = "number";    
                //numero.id = columna.toString() + fila.toString();   //se crea el id, ej: 00,01,02
                //numero.value = (sudokuTopRight[columna][fila]);     //con esto se crea el numero del sudoku generado aleatoriamente
                td.appendChild(numero);
                tr.appendChild(td);
            }     
        }
        tbody.appendChild(tr);//se agrega la fila a la tabla
    }
    tabla.appendChild(tbody);

    document.getElementById("boardBottRight").appendChild(tabla);
}

function prueba()
{
    let input = document.getElementById("C00");
    input.style.backgroundColor = "red";
}

function esValido(sudoku, fila, columna, num) {
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

function generarSudoku1(nombreSudoku) {
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
            if (esValido(sudoku, fila, columna, num)) {
                return num;
            }
        }
        return null;
    }
    // Se llena el Sudoku celda por celda
    for (var columna = 0; columna < 9; columna++) {             //crea Columnas
        for (var fila = 0; fila < 9; fila++) {                  //crea Filas
            //para crear los sudokus
            if(nombreSudoku === "TopLeft"){
                if (fila == 6 && columna >= 6){
                    break;
                }
            }
            if(nombreSudoku === "TopRight"){
                if (columna >= 6 && fila <= 2) { 
                    break;
                }
            }
            if(nombreSudoku === "BottLeft"){
                if (fila == 6 && columna <= 2) { 
                    break;
                }
            }
            if(nombreSudoku === "BottRight"){
                if (columna <= 2 && fila <= 2) { 
                    break;
                }
            }
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

function limpiarSudoku(){
    for (var i = 0; i < 6; i++) {                                           //crea Columnas
        for (var filas = 0; filas < 9; filas++) {                           //crea Columnas
            for (var columnas = 0; columnas < 9; columnas++) {              //crea Columnas
                nombre = "C" + filas.toString() + columnas.toString();
                let input = document.getElementById(nombre);
                input.value = null;
            }
        }
    }
}

function generarTableros(){
    let sudokuCenter = generarSudoku1(null);                                //aqui crea un sudoku aletoriamente siempre
    for (var i = 0; i < 6; i++) {                                           //crea Columnas
        for (var filas = 0; filas < 9; filas++) {                           //crea Columnas
            for (var columnas = 0; columnas < 9; columnas++) {              //crea Columnas
                nombre = "C" + filas.toString() + columnas.toString();
                let input = document.getElementById(nombre);
                input.value = sudokuCenter[filas][columnas];
            }
        }
    }
}
/**********************************************************************************************************/ 

/*ME FALTA TERMINAR ESTO*/ 
let sudokuTopLeft = generarSudoku1("TopLeft");
let sudokuTopRight = generarSudoku1("TopRight");
let sudokuBottLeft = generarSudoku1("BottLeft");
let sudokuBottRight = generarSudoku1("BottRight");



