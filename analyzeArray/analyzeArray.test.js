import analyzeArray from "./analyzeArray";

test("analyzes an array of numbers", () => {
  const result = analyzeArray([1, 8, 3, 4, 2, 6]);
  expect(result).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

test("handles arrays with a single number", () => {
  const result = analyzeArray([5]);
  expect(result).toEqual({
    average: 5,
    min: 5,
    max: 5,
    length: 1,
  });
});

test("handles arrays with negative numbers", () => {
  const result = analyzeArray([-1, -2, -3, -4]);
  expect(result).toEqual({
    average: -2.5,
    min: -4,
    max: -1,
    length: 4,
  });
});
