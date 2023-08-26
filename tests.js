
const checkPrime = (num) =>{
    if(num < 2){
        return "not prime" ;
    }
    for(let i = 2 ; i < num ; i++){
        if(num % i === 0){
            return "not prime" ;
        }
    }
    return "prime" ;
}

module.exports = checkPrime ;