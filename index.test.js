const check = require("./index") ;


test('check num', () => {
  expect(check(10)).toBe("even")
  expect(check(3)).toBe("odd") ;

 })