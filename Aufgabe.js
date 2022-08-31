function Summ(number1, number2, callbackFunction){
    callbackFunction(number1 + number2);
}
function print(number){
    console.log(number)
}

Summ(3, 4, print)