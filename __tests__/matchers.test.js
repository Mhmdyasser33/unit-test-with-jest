// Import the 'compare' object from the "../matchers" module
const compare = require("../matchers");

// Describe block for testing array operations
describe("array operation", () => {
    // Test to check if ob1 and ob2 are equal
    test('check they are equal or not', () => {
        expect(compare.ob1).toEqual(compare.ob2);
    });

    // Test to check if each element in 'arr' is equal to 0
    test("check array have zero or not", () => {
        for (let i = 0; i < compare.length; i++) {
            // Use the 'toBe' matcher to check if each element is 0
            expect(compare.arr[i]).toBe(0);
        }
    });

    // Test to check if the length of 'arr' is 9
    test("find array length", () => {
        // Use the 'toHaveLength' matcher to check the array length
        expect(compare.arr).toHaveLength(9);
    });

    // Test to check if 'arr' contains the number 10
    test("search for specific number", () => {
        // Use the 'toContain' matcher to check if the array contains the number 10
        expect(compare.arr).toContain(10);
    });
    test("check first num is greater than 10 or not" , ()=>{
        expect(compare.arr[0]).toBeGreaterThan(-1)
    })

    test( "check first num is less than 15 or not", ()=>{
     expect(compare.arr[0]).toBeLessThan(15)
    })
    test( "check first num is less than or equal 15 or not", ()=>{
        expect(compare.arr[0]).toBeLessThanOrEqual(15)
       })
       test( "check first num is greater or equal than 15 or not", ()=>{
        expect(compare.arr[0]).toBeGreaterThanOrEqual(11)
       })
});


  // Test if the asynchronous function fetches data from a specific endpoint and the result is defined
/* test("fetch data from specific endpoint", async () => {
    // Call the fetchDateFromApi function and wait for the result
    const result = await fetchDateFromApi();

    // Check if the result is defined
    expect(result).toBeDefined();
});

// Test if the asynchronous function fetches data from a specific endpoint and the result is an array
test("fetch data from specific endpoint", async () => {
    // Call the fetchDateFromApi function and wait for the result
    const result = await fetchDateFromApi();

    // Check if the result is an array
    expect(Array.isArray(result)).toBe(true);
}); */

 // using to be truthY matchers
test("using to be truthy" , () =>{
    let truthyVal = "mohamed" ;
    expect(truthyVal).toBeTruthy()
})
// using to be truthY matchers
test("using to be falsy" , () =>{
    let falsyVal = 0;
    expect(falsyVal).toBeFalsy() ;
})
 // using toMatch matcher
test("using toMatch Matcher" , () =>{
    let regexp = "hello world"
    expect(regexp).toMatch("hello") ;
})

// using toThrow Matcher
test("using toThrow matcher" , () =>{
   const throwError = () =>{
    throw new Error("this is an error") ;
   }
   expect(throwError).toThrow()
})

test("using toThrow matcher" , () =>{
    const throwError = () =>{
     throw new Error("this is an error") ;
    }
    expect(throwError).toThrow("this is an error")
 })

 test('toHaveBeenCalled and toHaveBeenCalledWith matchers', () => {
   const mockFn = jest.fn() ;
   mockFn() ;
   expect(mockFn).toHaveBeenCalled() ;
  });

  test('toHaveBeenCalled and toHaveBeenCalledWith matchers', () => {
    const mockFn = jest.fn() ;
    mockFn("hello" , "mohamed") ;
    expect(mockFn).toHaveBeenCalledWith("hello" , "mohamed")
   });


   test('toHaveBeenCalled and toHaveBeenCalledWith matchers', () => {
    let x;
    let i = 10 ;
    let y = null ;
    const ob = {
        name : "Mhmd" ,
        age : 21 ,
    }
     expect(x).toBeUndefined()
     expect(i).toBeDefined();
     expect(y).toBeNull()
     expect(ob).toHaveProperty("name")
   });


   // how to create custom matcher

   expect.extend({
// matcher Name
    toBeLargerThan(num1 , num2){
    let res = num1 > num2 ;
    if(res){
        return{
            message : () => `Expected ${num1} to be greater than ${num2}` ,
            // This is the one through which you know that it is the condition and whether it is fulfilled or not, and he is responsible for showing the correct sign if the condition is true and false if it is false.
            pass : true ,
        }
    }  else{
        return{
        message : () => `Error ${num1} to be less than ${num2}` ,
        pass : false,
        }
    }
    }
   })

   test("check n1 larger or not" , () =>{
     expect(20).toBeLargerThan(10)
   })


   // create custom matcher that check received number is between start and end number

   expect.extend({
     toBeBetween : (userValue , start , end)=>{
    let res = userValue > start && userValue < end ;
    if(res){
        return{
           message : () => `sure ${userValue} between ${start} and ${end}` ,
           pass : true
        }
    }else{
        return{
            message : () => `No ${userValue} is not between ${start} and ${end}` ,
            pass : false ,
         }
    }
     }
   })

   test("check this num is between or not " , () =>{
    expect(2020).toBeBetween(2010,2022)
   })


   // create toBeSorted matcher

   expect.extend({
    toBeSorted : (num1 , num2 , num3 ) =>{
     if(num1 < num2 && num2 < num3 ){
            return{
                message : () => `element here is sorted` ,
                pass : true
            }
     }else{
        return{
            message : () => `element here is not sorted` ,
            pass : false
        }
     }
    }
   })

   test('test element sorted or not', () => {
      expect(4).toBeSorted(5,6)
    })
    test('test element sorted or not', () => {
        expect(2).toBeSorted(3,4)
      })


