
/**
 * Here we gonna put the information of the function.
 * @param {string} parametro1 las llaves que están antes del nombre del parametro es para poner el tipo de dato del parametro.
 */
function prueba (parametro1){

}

window.onload = function() {
    creatTopLeft();
    creatTopRight();
    creatCenter();
    creatBottLeft();
    creatBottRight();
}

function creatTopLeft() {
    var tabla = document.createElement("table");
    var tbody = document.createElement("tbody");

    for (var i = 0; i < 9; i++) {//crea columnas
        var tr = document.createElement("tr");
        for (var j = 0; j < 9; j++) {//crea filas
            if (j == 6 && i >= 6){ //para no crear cuadros de mas
                break
            }
            var fila = document.createElement("td");//va creando las filas
            var numero = document.createElement("input");//el cuadro para escribir el numero
            numero.type = "number";//hace el cuadro de tipo numerico
            fila.appendChild(numero);//agrega el cuadro a la fila
            tr.appendChild(fila);//se agrega el elemento de la fila al tr, va desde el index 0 hasta el 9
        }
        tbody.appendChild(tr);//se agrega la fila a la tabla
    }
    tabla.appendChild(tbody);

    document.getElementById("boardTopLeft").appendChild(tabla);
}

function creatTopRight() {
    var tabla = document.createElement("table");
    var tbody = document.createElement("tbody");

    for (var i = 0; i < 9; i++) {//crea columnas
        var tr = document.createElement("tr");
        for (var j = 0; j < 9; j++) {//crea filas
            if (i >= 6 && j <= 2) { //para no crear cuadros de mas
                var fila = document.createElement("td");//va creando las filas
                var numero = document.createElement("input");//el cuadro para escribir el numero
                numero.type = "hidden"; //oculta los cuadros
                fila.appendChild(numero);
                tr.appendChild(fila);
                
            }else{
                var fila = document.createElement("td");//va creando las filas
                var numero = document.createElement("input");//el cuadro para escribir el numero
                numero.type = "number";    
                fila.appendChild(numero);
                tr.appendChild(fila);
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

    document.getElementById("boardCenter").appendChild(tabla);
}

function creatBottLeft() {
    var tabla = document.createElement("table");
    var tbody = document.createElement("tbody");

    for (var i = 0; i < 9; i++) {//crea columnas
        var tr = document.createElement("tr");
        for (var j = 0; j < 9; j++) {//crea filas
            if (j == 6 && i <= 2) { //para no crear cuadros de mas
                break
            }
            var fila = document.createElement("td");//va creando las filas
            var numero = document.createElement("input");//el cuadro para escribir el numero
            numero.type = "number";    
            fila.appendChild(numero);
            tr.appendChild(fila);
        }
        tbody.appendChild(tr);//se agrega la fila a la tabla
    }
    tabla.appendChild(tbody);

    document.getElementById("boardBottLeft").appendChild(tabla);
}

function creatBottRight() {
    var tabla = document.createElement("table");
    var tbody = document.createElement("tbody");

    for (var i = 0; i < 9; i++) {//crea columnas
        var tr = document.createElement("tr");
        for (var j = 0; j < 9; j++) {//crea filas
            if (i <= 2 && j <= 2) { //para no crear cuadros de mas
                var fila = document.createElement("td");//va creando las filas
                var numero = document.createElement("input");//el cuadro para escribir el numero
                numero.type = "hidden";
                fila.appendChild(numero);
                tr.appendChild(fila);
                
            }else{
                var fila = document.createElement("td");//va creando las filas
                var numero = document.createElement("input");//el cuadro para escribir el numero
                numero.type = "number";    
                fila.appendChild(numero);
                tr.appendChild(fila);
            } 
        }
        tbody.appendChild(tr);//se agrega la fila a la tabla
    }
    tabla.appendChild(tbody);

    document.getElementById("boardBottRight").appendChild(tabla);
}