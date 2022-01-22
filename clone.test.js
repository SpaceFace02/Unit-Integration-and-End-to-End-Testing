const { expect } = require("@jest/globals");
const clone = require("./clone");

// 2 arrays, same values, but different memory address. Hence we use toEqual() to check values instead of toBe(), which checks for exact equality.
test("Clones array", () => {
  const array = [1, 2, 3, 6];
  expect(clone(array)).toStrictEqual(array);
  expect(clone(array)).not.toBe(array);
});
