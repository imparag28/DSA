function runProgram(input) {
  // Write code here
  input = input.trim().split('\n')
  const t = +input[0]
  let line = 1
  let array = []
  //
  let q1 = [],
    q2 = [],
    q3 = [],
    q4 = []
  let led = {
    q1: 0,
    q2: 0,
    q3: 0,
    q4: 0
  }
  let front = []
  for (let i = 0; i < t; i++) {
    let [L, N, M] = input[line].split(" ");
    line++

     //console.log(L,N,M)
    if (L == 'E') {
      enqueue(N, M)
    } else {
      dequeue()
    }
  }

  function enqueue(N, M) {
    if (N == 1) {
      q1.push(M)

      if (led.q1 == 0) {
        led.q1++
        front.push(1)
      }

    }
    if (N == 2) {
      q2.push(M)
      if (led.q2 == 0) {
        led.q2++
        front.push(2)
      }
    }
    if (N == 3) {
      q3.push(M)
      if (led.q3 == 0) {
        led.q3++
        front.push(3)
      }

    }
    if (N == 4) {
      q4.push(M)
      if (led.q4 == 0) {
        led.q4++
        front.push(4)
      }
    }

  }

  function dequeue() {
    let x = front[0]
    //console.log(front)
    if (x == 1) {
      console.log(1, q1[0])
      q1.shift()
      if (q1.length == 0) {
        led.q1 = 0
        front.shift()
      }
    } else if (x == 2) {
      console.log(2, q2[0])
      q2.shift()
      if (q2.length == 0) {
        led.q2 = 0
        front.shift()
      }
    } else if (x == 3) {
      console.log(3, q3[0])
      q3.shift()
      if (q3.length == 0) {
        led.q3 = 0
        front.shift()
      }
    } else if (x == 4) {
      console.log(4, q4[0])
      q4.shift()
      if (q4.length == 0) {
        led.q4 = 0
        front.shift()
      }
    }

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