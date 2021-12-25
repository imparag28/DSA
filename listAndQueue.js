function runProgram(input) {
    // Write code here
    input = input.split('\n')
    var t = +input[0]
    var line = 0
    let queue1 = []
    let queue2 = []


    line++

    for (let j = 0; j < t; j++) {

        [N, M] = input[line].split(" ")
        //console.log(N,M)
        if (N == 'Push') {
            queue2.push(+M)
            //console.log(queue2)
            while (queue1.length != 0) {
                let x = queue1.shift()
                queue2.push(x)
            }
            while (queue2.length != 0) {
                let x = queue2.shift()
                queue1.push(x)
            }

        }
        // console.log(queue1)
        //console.log(queue2,"---")
        if (N == 'Pop') {
            if (queue1.length > 0) {
                console.log(queue1[0])
                queue1.shift()
            } else {
                console.log("Empty")
            }


        }
        line++
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