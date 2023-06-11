export default function CreateBoard(row , col , mines){
    let board = [];
    let mineLocation = [];

    //create new Board
    for(let x =0; x<row; x++){
        let subCol = [];
        for(let y=0; y<col; y++){
            subCol.push({
                value: 0,
                revealed: false,
                x: x,
                y: y,
                flagged: false,
            });
        }
        board.push(subCol);
    }

    //random mine placing
    if(mines > (row*col)/3){
        mines = Math.floor(row*col/3);
    }
    
    let minesCnt = 0;
    while(minesCnt<mines){
        // use random to choose mines location
        let x = Math.floor(Math.random()*(row));
        let y = Math.floor(Math.random()*(col));
        
        //place mines
        if(board[x][y].value === 0){
            board[x][y].value = 'X';
            mineLocation.push([x, y])
            minesCnt++;
        }
    }

    // Increasing the value of specific cell 
    // If the cell has mines increasing the cell value by 1.
    // Add Numbers
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
          if (board[i][j].value === "X") {
            continue;
          }
    
          // Top
          if (i > 0 && board[i - 1][j].value === "X") {
            board[i][j].value++;
          }
    
          // Top Right
          if (
            i > 0 &&
            j < col - 1 &&
            board[i - 1][j + 1].value === "X"
          ) {
            board[i][j].value++;
          }
    
          // Right
          if (j < col - 1 && board[i][j + 1].value === "X") {
            board[i][j].value++;
          }
    
          // Botoom Right
          if (
            i < row - 1 &&
            j < col - 1 &&
            board[i + 1][j + 1].value === "X"
          ) {
            board[i][j].value++;
          }
    
          // Bottom
          if (i < row - 1 && board[i + 1][j].value === "X") {
            board[i][j].value++;
          }
    
          // Bottom Left
          if (
            i < row - 1 &&
            j > 0 &&
            board[i + 1][j - 1].value === "X"
          ) {
            board[i][j].value++;
          }
    
          // LEft
          if (j > 0 && board[i][j - 1].value === "X") {
            board[i][j].value++;
          }
    
          // Top Left
          if (i > 0 && j > 0 && board[i - 1][j - 1].value === "X") {
            board[i][j].value++;
          }
        }
      }
      return { board, mineLocation };
}