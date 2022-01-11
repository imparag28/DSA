var sortedSquares = function(nums) {
    let i = 0
    let j = nums.length-1
    let ind = nums.length-1
    let arr = []
    while(i<=j){
        let val1 = nums[i]*nums[i]
        let val2 = nums[j]*nums[j]
        let mx = Math.max( val1,val2)
        if(val1>val2){
            i++
           arr[ind] = val1
            ind--
            
        }else{
            j--
           arr[ind] = val2
            ind--
        }
    }
    return arr
};