//https://www.youtube.com/watch?v=8dJ1OLtXNvQ

function sum(A, B){
    let n = A.length
    let currentsum = 0
         for(let i = 0;i<B;i++){
           currentsum+=A[i]
         }
    
         let maxSum = currentsum
         let icl = n-1 
         let ex = B-1
         while( icl >= 0 &&ex >= 0 ){
           currentsum+=A[icl--]
           currentsum-=A[ex--]
           maxSum = Math.max(maxSum ,currentsum)
         }
         return maxSum
      }
      console.log(sum([5, -2, 3 , 1, 2],3))


     In this 1st sum the all element upto B 
      