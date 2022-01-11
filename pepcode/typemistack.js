 function a(name, typed) {
     console.log(name.length,typed.length)
    let i = 0
    let j = 0
    while(i<name.length && j<typed.length){
        console.log(name.charAt(i))
        if(name.charAt(i) == typed.charAt(j)){
            i++;
            j++
        }else if(i>0 && name.charAt(i-1) == typed.charAt(j)){
            j++
        }else{
            return false
        }
    }
    while(j<typed.length){
        if(name.charAt(i-1)!=typed.charAt(j)) return false
        j++
    }
    return i<name.length ? false : true
    
};
a("alex",
"aaleex")