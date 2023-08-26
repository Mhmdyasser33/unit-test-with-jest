

/**
 * expect.anything() :  is a Jest matcher that asserts that a value
 * is of any data type or is truthy, without specifying a specific
 *  expectation about its content or structure , it is used with toEqual matcher
 */

test("expect anything" , () =>{
    expect("mohamed").toEqual(expect.anything())
    expect(10).toEqual(expect.anything()) ;
    expect({
 name : "mohamed" ,
 age : 20 ,
    }).toEqual(expect.anything())
 })

 /**
  * expect.any(constructor like Number || string ) : it accept any constructor like Number || string
 */

 test("expect any constructor" , () =>{
     expect(10).toEqual(expect.any(Number))
     expect("mohamed").toEqual(expect.any(String))
     expect(["mohamed" , "Yasser" , 10,20]).toEqual(expect.any(Array)) ;

 })

 /**
  *arrayContaining() : is a Jest matcher that checks if an array contains all the elements specified in the provided array.
 */

  test("Check if an array contains specific elements" , () =>{
    let mainArr = [1,2,3,4,5,6] ;
    let specifiedArr = [2,4,6] ;
    // if we add number did not exist in original test will be fail
    expect(mainArr).toEqual(expect.arrayContaining(specifiedArr)) ;
  })

  test("test number greater than 10" , () =>{
   let arr = [20,10,15,16,17] ;
   expect(arr.some((item) => item > 10)).toBe(true) ;
  })

