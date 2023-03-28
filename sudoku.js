
/**
 * Here we gonna put the information of the function.
 * @param {string} parametro1 las llaves que están antes del nombre del parametro es para poner el tipo de dato del parametro.
 */
function prueba (parametro1){

}

window.onload = function() {
    crearCuadros();
    crearCuadros2();
}

function crearCuadros() {
    var tabla = document.createElement("table");
    var tbody = document.createElement("tbody");

    for (var i = 0; i < 9; i++) {//crea columnas
        var tr = document.createElement("tr");
        for (var j = 0; j < 9; j++) {//crea filas
                var fila = document.createElement("td");//va creando las filas
                var numero = document.createElement("input");//el cuadro para escribir el numero
                numero.type = "number";    
                fila.appendChild(numero);
                tr.appendChild(fila);
            }
            tbody.appendChild(tr);//se agrega la fila a la tabla
    }
    
    tabla.appendChild(tbody);

    document.getElementById("boardTopLeft").appendChild(tabla);
    document.getElementById("boardTopRight").appendChild(tabla);
    document.getElementById("boardCenter").appendChild(tabla);
    document.getElementById("boardBottLeft").appendChild(tabla);
    document.getElementById("boardTopLeft").appendChild(tabla);

    }

function crearCuadros2() {
    var tabla = document.createElement("table");
    var tbody = document.createElement("tbody");

    for (var i = 0; i < 9; i++) {//crea columnas
        var tr = document.createElement("tr");
        for (var j = 0; j < 9; j++) {//crea filas
                var fila = document.createElement("td");//va creando las filas
                var numero = document.createElement("input");//el cuadro para escribir el numero
                numero.type = "number";    
                fila.appendChild(numero);
                tr.appendChild(fila);
            }
            tbody.appendChild(tr);//se agrega la fila a la tabla
    }
    
    tabla.appendChild(tbody);

    document.getElementById("boardTopRight").appendChild(tabla);
    }