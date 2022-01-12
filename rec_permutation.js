function genertatePermutation(arrray ,current){
    if(current == arrray.length){
        print(arr)
        return
    }
    for(i=current;i<arrray.length;i++){
        swap(arrray,i,current)
         genertatePermutation(arrray,current+1)
         swap(arrray,i,current)
    }
}

 