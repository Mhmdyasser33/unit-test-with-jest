const sum = require("./app") ;

/* start using global method */

// if there is no num and want to find sum of them
test('sum of numbers', () => {
    expect(sum()).toBe(0);
  })

  // if there is only one num and want to find sum of them
test('sum of numbers', () => {
    expect(sum(10)).toBe(10);
  })

 // if there is two num and want to find sum of them
 test('sum of numbers', () => {
   expect(sum(10 , 20)).toBe(30);
 })
   // if there is three num and want to find sum of them
 test('sum of numbers', () => {
    expect(sum(10 , 20 , 40)).toBe(70);
  })

  // if there is n numbers want to find sum of them how to implement it dynamic

  test('sum of  n numbers', () => {
    expect(sum(10 , 20 , 40 , 50,60,70,80,90)).toBe(420);
  })



