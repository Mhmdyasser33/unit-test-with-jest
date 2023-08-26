const primeNum = require("../tests") ;

// using beforeAll
beforeAll(() =>{
   // Set up resources or perform actions before each test
  // initializeDatabase() ;
   console.log("i will applied before all test cases are passed or executed") ;
})

test('check num is prime or not', () => {
   expect(primeNum(12)).toBe("not prime") ;
})

test('check num is prime or not', () => {
    expect(primeNum(1)).toBe("not prime") ;
 })

// using after all
 afterAll(() =>{
    // Clean up resources or perform actions after all tests have finished
  // For instance, closing the database connection
    console.log("i will applied after all test cases are passed or executed")
 })

 const add = (a , b) =>{
      return a + b ;
 }

 describe("add two number" , () =>{
  let n1 , n2 ;
  beforeEach(() =>{
      // Set up resources or perform actions before each test
    n1 = 10 ;
    n2 = 20 ;
  })

/*====================================== */
afterEach(() =>{
    // Set up resources or perform actions after each test
    n1 = null ;
    n2 = null ;
})

// after and before this test will implement beforeEach and afterEach function
test("add two num" , () =>{
    let result = add(10,20) ;
    expect(result).toBe(30)
})

// after and before this test will implement beforeEach and afterEach function
test('should another two num', () => {
  let result = add(15,25) ;
  expect(result).toBe(40) ;
 })
 })