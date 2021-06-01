
let power = document.getElementById("pow")
let ac = document.getElementById("ac")
let equals = document.getElementById("equals")
let on = document.getElementById("off")
let key = document.querySelectorAll(".key")
let operators = document.querySelectorAll(".op")
let back = document.getElementById("back")
function press(){
    let screen = document.getElementById("scr")
    let text = screen.textContent
    if(text[text.length -1] != "!"){
        if(this.textContent == "^"){
            let text = "**"
            screen.append(text)
        }
        else{
            let text = this.textContent
            screen.append(text)
        }
    }
    
    

}
function backspace(){
    let screen = document.getElementById("scr")
    let temp = screen.textContent
    let text = temp.substr(0, temp.length - 1)
    screen.textContent = text
}
function operator(){
    let oplist = ["/","*","+","-","^","!","."]
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
function factorial(x){
    if (x==1){
        return 1
    }
    else{
        let result = x * factorial(x-1)
        return result
    }
}

key.forEach(item =>{
    item.addEventListener("click", press)
})
operators.forEach(item=>{
    item.addEventListener("click", operator)
})
ac.addEventListener("click", AC)
on.addEventListener("click", onoff)
back.addEventListener("click", backspace)
equals.addEventListener("click", equate)
power.addEventListener("click", press)

function equate(){
    let screen = document.getElementById("scr")
    let temp = screen.textContent
    if(temp[temp.length - 1] == "!"){
        let num = temp.substr(0, temp.length-1)
        var answer = String(factorial(num))
    }
    else{
        var answer = String(eval(temp))
    }
    if(answer.length >= 13){
        // answer = answer.substr(0,13)
        screen.style.fontSize = "40px"
        screen.textContent = answer
    }else{
        screen.textContent = answer
    }
    
}
