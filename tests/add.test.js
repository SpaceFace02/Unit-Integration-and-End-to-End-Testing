const { expect } = require("@jest/globals");
const add = require("../functions/add");

test("Adds two numbers", () => {
  expect(add(1, 2)).toBe(3);
  expect(add(2, 3)).toBe(5);
});
