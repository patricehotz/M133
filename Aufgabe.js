function calculateStraightNumbers(resolve, reject){
    let result = 0;
    try{
        for(let i = 0; i < 900000000; i++){
            if(!(i % 2)){
                result += i;
            }
        }
        resolve(result)
    }
    catch(error){
        reject(error)
    }
}
const promise = new Promise(calculate)
promise.then(result => console.log(result), error => console.error(error))