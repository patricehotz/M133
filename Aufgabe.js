function Summ(number1, number2, callbackFunction){
    callbackFunction(number1);
    callbackFunction(number2);
    callbackFunction(number1+ number2);
}

Summ(1 , 2 , number => console.log(number))