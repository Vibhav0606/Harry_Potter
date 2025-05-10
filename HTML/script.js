function display(a){
    let data = document.getElementById("disp")
    data.innerHTML += a
}

function u_clear1(){
    let data = document.getElementById("disp")
    data.innerHTML = 0
}

function u_clear(){
    let data = document.getElementById("disp")
    data.innerHTML = null
}

function calculate(){
    let data = document.getElementById("disp")
    let expression = data.innerHTML
    let res = eval(expression)
    console.log(res)
    data.innerHTML = res
}
