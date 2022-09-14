function calculate(callbackfunction){
    let result = 0;
    for(let i = 0; i < 900000000; i++){
        result += i;
    }
    callbackfunction(result)
}
calculate(result => console.log(result))