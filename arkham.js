
function steps(life, success = 1 / 3){
    let n = life
    let step = 0.25
    for (; ; n++) {
        let outcome = 0

        for (let i = life; i <= n; i++) {
            outcome += newton(n, i) * pow(success, i) * pow(1 - success, n - i)
        }
        if (outcome > step) {
            console.log(n + ":           " + Math.round(outcome * 10000) / 100 + " %")
            switch (step) {
                case 0.25: step = .5
                    break;
                case 0.5: step = .8
                    break;
                case 0.8: step = .95
                    break;
                case 0.95: return;
            }
        }
    }
}

function newton(a, c) {
    if (c < 1)
        return 1
    return newton(a - 1, c - 1) * (a / c)
}

function pow(a, c) {
    const b = a
    for (; c > 1; c--) {
        a *= b
    }
    return a;
}

console.log("########### standardowe testy ###########")
for(let i = 1; i <= 5; i++){
    console.log("zycie potwora = " + i)
    console.log("ilosc kosci | szansa na pokonanie")
    steps(i)
    console.log(" ")
}
console.log(" ")

console.log("########### blogoslawione testy ###########")
for(let i = 1; i <= 5; i++){
    console.log("zycie potwora = " + i)
    console.log("ilosc kosci | szansa na pokonanie")
    steps(i, 0.5)
    console.log(" ")
}
console.log(" ")

console.log("########### przelkete testy testy ###########")
for(let i = 1; i <= 5; i++){
    console.log("zycie potwora = " + i)
    console.log("ilosc kosci | szansa na pokonanie")
    steps(i, 0.17)
    console.log(" ")
}