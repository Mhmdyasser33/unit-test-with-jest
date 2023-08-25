/*
const findSum = (num1 , num2 , num3) =>{
     // using|| here is called truthy and falsy pattern
 return (num1 || 0 ) + (num2 || null )  + ( num3 || null)  ;
}

// export this function
module.exports  = findSum ; */

// using  this will make first test did not passed
/* const findSum = (...args) =>{
  return args.reduce((pv , cv) =>{
   return pv + cv ;
  })
} */

/* to make first test if there is no number make this test passed through using initial value of reduce method  */
const findSum = (...args) =>{
    return args.reduce((pv , cv) =>{
     return pv + cv ;
    } , 0)
  }

module.exports  = findSum ;






