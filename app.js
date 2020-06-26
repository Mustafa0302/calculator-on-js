function getNumber(num){
    var result =document.getElementById("result")
    result.value += num
}

function clearValue(){
    var result =document.getElementById("result")
    result.value = ""
}

function resultOf(){
    var result =document.getElementById("result")
    result.value = eval(result.value)
}