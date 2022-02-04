function Maxarr(arr,idx){
    if(idx == arr.length-1){
        return arr[idx]
    }
    let misa = Maxarr(arr,idx+1)
    if(misa > arr[idx]){
    return misa    
    }else {
        return arr[idx]
    }
    
}
console.log(Maxarr([2,3,4,1,6,7],0))