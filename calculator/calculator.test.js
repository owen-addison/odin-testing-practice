import calculator from "./calculator";

// Test for the 'add' function
test("adds two numbers", () => {
  expect(calculator.add(1, 2)).toBe(3);
  expect(calculator.add(-1, 2)).toBe(1);
  expect(calculator.add(1.5, 2.5)).toBe(4);
});

// Test for the 'subtract' function
test("subtracts two numbers", () => {
  expect(calculator.subtract(5, 3)).toBe(2);
  expect(calculator.subtract(3, 5)).toBe(-2);
  expect(calculator.subtract(5.5, 0.5)).toBe(5);
});

// Test for the 'multiply' function
test("multiplies two numbers", () => {
  expect(calculator.multiply(3, 4)).toBe(12);
  expect(calculator.multiply(-3, 4)).toBe(-12);
  expect(calculator.multiply(3, 0)).toBe(0);
});

// Test for the 'divide' function
test("divides two numbers", () => {
  expect(calculator.divide(8, 2)).toBe(4);
  expect(calculator.divide(9, 3)).toBe(3);
  expect(calculator.divide(5, 2)).toBe(2.5);
});

// Test for division by zero
test("handles division by zero", () => {
  expect(() => calculator.divide(5, 0)).toThrow(
    "Division by zero is not allowed!"
  );
});
