const checkNum = require("../check") ;

 // use describe
 // describe : is a function used to group a related tests together

 describe("data related to even or odd" , () =>{
     test('even or odd', () => {
          expect(checkNum(4)).toBe("even")
      })
 })