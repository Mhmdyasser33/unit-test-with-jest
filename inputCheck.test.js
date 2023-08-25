/**
 * A function that performs input validation and transformation.
 *
 * @param {string} [name] - The input name.
 * @returns {string} The processed name or "unknown" if input is undefined.
 */
const inputRes = require("./inputCheck");

describe("check input cases", () => {
  /**
   * Test case: if name is undefined.
   */
  // using only mean that this test only will be test and another will be stooped
  test.only('if name is undefined', () => {
    expect(inputRes()).toBe("unknown");
  });

  /**
   * Test case: if name starts with digit.
   */
  // using skip mean that this test will be skipped and another will being tested
  test.skip("if name starts with digit", () => {
    expect(inputRes("1mohamed")).toBe("mohamed");
  });

  /**
   * Test case: if name starts with 2 underscores.
   */
  test("if name starts with 2 underscores", () => {
    expect(inputRes(" mohamed ")).toBe("mohamed");
  });
});