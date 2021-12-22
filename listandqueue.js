function runProgram(input) {
    // Write code here
    input = input.split('\n')
    var t = +input[0]
    var line = 0
    var array = []
    array[0] = 0
    let rear = 0;
    let front = 0;
    
    let size = array.length
    //console.log(input)
     line++
      
        for(let j = 0;j<t;j++){
           
             [N,M] = input[line].split(" ")
              if(N == 'E') enqueu(M)
              if(N == 'D'){
                  let a = dequeue()
                  if(a == 0){
                      console.log("Empty")
                  }else{
                      console.log(a)
                  }
              }
              line++
        }
        function enqueu(data){
              if(rear == size){
            
              return 0;
      }
          array[rear] = data;
          rear++
          return
      }
      function dequeue(){
          if(rear == front){
          
          return 0
      }
          var data = array[front]
           front++
          return data
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