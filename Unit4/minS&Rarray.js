function runProgram(input) {

    input = input.split("\n")
    let l = +input[0]
    let arr = input[1].split(" ").map(Number)
    console.log(small(arr,l))
    
     function small(arr,l){
        let start = 0
        let end = l-1
        
        while(start < end){
         let mid = Math.floor((start + end) / 2);
         // let next = mid+1
         // let pre = mid-1
          if(arr[end] < arr[mid]){
              start = mid+1
          }else {
              end = mid
          }
        }
       return arr[start]
    }
 
 }
 if (process.env.USER === "") {
     runProgram(``);
 } else {
     process.stdin.resume();
     process.stdin.setEncoding("ascii");
     let read = "";
     process.stdin.on("data", function (input) {
         read += input;
     });
     process.stdin.on("end", function () {
         read = read.replace(/\n$/, "");
         read = read.replace(/\n$/, "");
         runProgram(read);
     });
     process.on("SIGINT", function () {
         read = read.replace(/\n$/, "");
         runProgram(read);
         process.exit(0);
     });
 }
 
 