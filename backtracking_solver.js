const board1 = [                 // board izq arriba
  [5, 4, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
];

const board2 = [               // board derecha arriba
  [5, 4, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
];
const board3 = [            // board izq abajo
  [5, 4, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
];
const board4 = [              // board derecha abajo
  [5, 4, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
];

const board5 = [              // board en medio
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
];


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
      if (board[y][x] === 0) {  // si la casilla no tiene numero
        for (let num = 1; num <= 9; num++) {  // pruebo del 1 al 9
          board[y][x] = num;           // seteo la casilla en el numero
          if (esValido(board, y, x)) {       // si la jugada es posible
            if (resolverSudoku(board)) {    // recursivo 
              return board;                
            }
          }
          board[y][x] = 0;                // si no es posible devuelvo el valor a 0 
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

function printSamuraiSudoku(board1, board2, board3, board4, board5) {
  const divider = "+-------+-------+-------+";
  const samuraiBoard = [
    [board1, board2, board3],
    [board4, board5, board4],
    [board3, board2, board1],
  ];

  for (let i = 0; i < samuraiBoard.length; i++) {
    console.log(divider);
    for (let j = 0; j < samuraiBoard[i].length; j++) {
      const board = samuraiBoard[i][j];
      for (let k = 0; k < board.length; k += 3) {
        const row = board[k].join("  ") + " | " + board[k + 1].join("  ") + " | " + board[k + 2].join("  ");
        console.log(`| ${row} |`);
      }
    }
  }
  console.log(divider);
}

printSamuraiSudoku(board1, board2, board3, board4, board5);

