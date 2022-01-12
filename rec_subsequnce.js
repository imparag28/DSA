function subseq(new_str,str,index){
    if(new_str.length != 0){
        print(new_str)
    }
    if(index = str.length){
        return;
        
    }

    for(let i = index; i<str.length;i++){
        new_str+=str[i]
        subseq(new_str,str,i+1)
        new_str.remove(new_str.length-1)
    }
}

str = "abcd"
new_str = ""
index = 0
subseq("","abcd",0)