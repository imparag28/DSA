function validCanditate(arr){
    let val = arr[0]
    let count = 1
    for(let i = 0;i<arr.length;i++){
        if(val == arr[i]){
            //same element increase freq
            count++
        }else{
            count--
        }
        if(count == 0){
            val = arr[i]
            count = 1
        }
    }
    console.log(val)
    return val
}
function majorityElement(nums) {
      //value have potantial candidate for majority 

  let value = validCanditate(nums)  
  let count = 0
  
  //find freq for potiatial candidate
  for(let i = 0;i<nums.length;i++){
      if(nums[i] == value){
          count++
      }
      if(count > nums.length/2){
          console.log(value)
      }
  }
  
};
majorityElement([3,2,3])