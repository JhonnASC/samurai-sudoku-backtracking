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

console.log(board[0][2])
console.log(revisar_eje_y(board,0,2))
console.log(revisar_eje_x(board,0,2))