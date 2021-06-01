let one = document.getElementById("1")
let two = document.getElementById("2")
let three = document.getElementById("3")
let four = document.getElementById("4")
let five = document.getElementById("5")
let six = document.getElementById("6")
let seven = document.getElementById("7")
let eight = document.getElementById("8")
let nine = document.getElementById("9")
let zero = document.getElementById("0")
let back = document.getElementById("back")
let div = document.getElementById("div")
let mul = document.getElementById("mul")
let sub = document.getElementById("sub")
let add = document.getElementById("sum")
let dot = document.getElementById("dot")
let equals = document.getElementById("equals")
let on = document.getElementById("off")
let power = document.getElementById("pow")
let fact = document.getElementById("fact")
let ac = document.getElementById("ac")


function press(){
    let screen = document.getElementById("scr")
    if(this.textContent == "^"){
        let text = "**"
        screen.append(text)
    }
    else{
        let text = this.textContent
        screen.append(text)
    }
    

}
function backspace(){
    let screen = document.getElementById("scr")
    let temp = screen.textContent
    let text = temp.substr(0, temp.length - 1)
    screen.textContent = text
}
function operator(){
    let oplist = ["/","x","+","-"]
    let screen = document.getElementById("scr")
    let text = this.textContent
    let temp = screen.textContent
    let lastvalue = temp[temp.length -1]
    if (oplist.includes(lastvalue) == false){
        screen.append(text)
    }
}
function AC(){
    let screen = document.getElementById("scr")
    screen.textContent = ""
}
function onoff(){
    let screen = document.getElementById("scr")
    if(this.textContent == "ON"){
        screen.style.display = "none"
        this.textContent = "OFF"
        screen.textContent=""
        screen.style.backgroundColor = "black"
    }else{
        screen.style.display = "flex"
        this.textContent = "ON"
        screen.textContent = ""
    }
    
}


one.addEventListener("click", press)
two.addEventListener("click", press)
three.addEventListener("click", press)
four.addEventListener("click", press)
five.addEventListener("click", press)
six.addEventListener("click", press)
seven.addEventListener("click", press)
eight.addEventListener("click", press)
nine.addEventListener("click", press)
zero.addEventListener("click", press)
power.addEventListener("click", press)
fact.addEventListener("click", press)

ac.addEventListener("click", AC)
on.addEventListener("click", onoff)

div.addEventListener("click", operator)
mul.addEventListener("click", operator)
add.addEventListener("click", operator)
sub.addEventListener("click", operator)
dot.addEventListener("click", operator)
equals.addEventListener("click", equate)


back.addEventListener("click", backspace)

function equate(){
    let screen = document.getElementById("scr")
    let temp = screen.textContent
    let answer = eval(temp)
    screen.textContent = answer
}
