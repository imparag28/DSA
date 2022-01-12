function Nqueens(board,N,row){
    if(row == N){
        count++
        return 
    }
    for(i = 0;i<N;i++){
        if(isSafe(board,row,i)== true){
            board[row][i] = 1
            Nqueens(board,N,row+1)
        }
    }
}