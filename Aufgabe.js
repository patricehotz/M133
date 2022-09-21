async function calculateEvenNumbers(){
    let result = 0;
    for(let i = 0; i < 900000000; i++){
        if(!(i % 2)){
            result += i;
        }
    }
    return result
}
async function calculateUnevenNumber(){
    let result = 0;

    for(let i = 0; i < 900000000; i++){
        if(i % 2){
            result += i;
        }
    }
    return result
}

async function asyncCall(){
    const promiseEvenNumber = calculateEvenNumbers()
    const promiseUnevenNumer = calculateUnevenNumber()

    console.log(await promiseEvenNumber)
    console.log(await promiseUnevenNumer)
}

asyncCall()