function rec(num){
    if(num == 1) return 1;   
   return num*rec(num-1)
    //console.log(num)
}
rec(5)