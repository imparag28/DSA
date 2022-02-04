function rec(num){
    if(num == 0) return;
    rec(num-1)
    console.log(num)
}
rec(5)