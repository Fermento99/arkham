
//  ########## MATH ########## 
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

function chances(life, dice, success) {
    let outcome = 0
    dice++
    dice--
    for (let i = life; i <= dice; i++) {
        outcome += newton(dice, i) * Math.pow(success, i) * Math.pow(1 - success, dice - i)
    }
    return Math.round(outcome * 10000) / 100 + "%";
}

// ########## HANDLERS ##########

function checkRadio() {
    if(document.getElementById("normal").checked == true) return 1/3
    if(document.getElementById("blessed").checked == true) return 1/2
    if(document.getElementById("cursed").checked == true) return 1/6
    return 0
}

function checkLife() {
    const v = document.getElementById("life").value
    return v
}

function checkDice() {
    const v = document.getElementById("dice").value
    return v
}

document.getElementById("accept").onclick = (ev) => {
    let s = checkRadio()
    let l = checkLife()
    let d = checkDice()
    console.log("chance: " + Math.round(s*100) + "%, life: " + l + ", dice: " + d)
    document.getElementById("output-line").innerHTML = "sznasa na sukces: " + chances(l, d, s)
}
