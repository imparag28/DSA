function followThenNight(board,row,col,N){
    if(row < 0 || col< 0 || row>=10 || col >=10 ){
        return
    }
    if(N == 0){
        board[row][col] = 1
        return ;
    }
    followThenNight(board ,row-2,col+1,N-1)
    followThenNight(board ,row-2,col-1,N-1)
    followThenNight(board ,row+2,col+1,N-1)
    followThenNight(board ,row+2,col-1,N-1)
    followThenNight(board ,row-1,col+2,N-1)
    followThenNight(board ,row+1,col+2,N-1)
    followThenNight(board ,row-1,col-2,N-1)
    followThenNight(board ,row+1,col-2,N-1)
}