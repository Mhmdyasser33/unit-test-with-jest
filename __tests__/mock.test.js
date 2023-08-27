const mockPrinter = require("../mock"); // Importing the mock function

// Test case to check if the mockPrinter function behaves as expected
test("mock fun", () => {
  // Using the mockPrinter function to test its behavior
  // Expects the result to be "hello mohamed"
  expect(mockPrinter("mohamed")).toBe("hello mohamed");
});

// Test case to demonstrate the usage of a Jest mock function
test("test mock fun", () => {
  // Creating a mock function with custom behavior
  /**
   * Mock function to simulate the behavior of a greeting function.
   * It takes a 'name' argument and returns a string formatted as "hello {name}".
   * Example: mockFun("John") returns "hello John".
   */
  const mockFun = jest.fn((name) => `hello ${name}`);

  // Testing the mock function's behavior with different arguments
  // Expects the returned values to match the format "hello {name}"
  expect(mockFun("mohamed")).toBe("hello mohamed");
  expect(mockFun("yasser")).toBe("hello yasser");
  expect(mockFun("abdelrahim")).toBe("hello abdelrahim");
  expect(mockFun("mohamed")).toBe("hello mohamed");

  // Checking assertions about function calls
  expect(mockFun).toHaveBeenCalled(); // Expects the mock function to have been called
  expect(mockFun).toHaveBeenCalledWith("yasser"); // Expects the mock function to have been called with "yasser"
  expect(mockFun).toHaveBeenCalledTimes(4); // Expects the mock function to have been called 4 times
  expect(mockFun).toHaveBeenLastCalledWith("mohamed"); // Expects the last call to be with "mohamed"
});
