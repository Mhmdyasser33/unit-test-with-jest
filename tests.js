
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
let name ;
 if( name=== "hell"){
    throw new Error ("this is not allowed name") ;
 }
module.exports = checkPrime ;