function occ(arr,idx,x){
    if(idx == arr.length){
        return -1
    }
   let fiss = occ(arr,idx+1,x)
   if(fiss == -1){
    if(arr[idx] == x){
       return idx
   }else{
    return -1
   }
   }else{
       return fiss

   }
  
}
occ([1,2,3,4,5,3],0,4)