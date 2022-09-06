function Summ(number1, number2, callbackFunction){
    callbackFunction(number1);
    callbackFunction(number2);
    callbackFunction(number1 + number2);
}

function print(number){
    console.log(number)
}