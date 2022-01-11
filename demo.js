function dequeue() {
    let x = front[0]
    if (x == 1) {
        console.log(1, q1[0])
        q1.shift()
        if (q1.length == 0) {
            led.q1 = 0
            front.shift()
        }
    } else if (x == 2) {
        console.log(2, q1[0])
        q2.shift()
        if (q1.length == 0) {
            led.q2 = 0
            front.shift()
        }
    } else if (x == 3) {
        console.log(1, q3[0])
        q3.shift()
        if (q3.length == 0) {
            led.q3 = 0
            front.shift()
        }
    } else if (x == 4) {
        console.log(1, q4[0])
        q1.shift()
        if (q4.length == 0) {
            led.q4 = 0
            front.shift()
        }
    }

}

-1
-1
1
1
-1
2
3
4
2