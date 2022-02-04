obj = {}
function uniqueGift(str){

    str =""
    queue = []
    
    for(let i = 0;i<a.length;i++){
        queue.push(a[i])
        while(queue.length != 0){
            if(obj[queue[0] != 1]){
                queue.shift()
            }else{
                break
            }
        }
        if(queue.length == 0){
            str+="#"
        }else{
            str+ = queue[0]
        } 
    }
}
