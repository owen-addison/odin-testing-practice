import capitalise from "./capitalise";

test("capitalises the first character of the string 'input'", () => {
  expect(capitalise("input")).toBe("Input");
});

test("capitalises the first character of the string 'INPUT'", () => {
  expect(capitalise("INPUT")).toBe("Input");
});

test("returns an empty string when given an empty string", () => {
  expect(capitalise("")).toBe("");
});

test("preserves leading spaces", () => {
  expect(capitalise("    input")).toBe("    Input");
});

test("handles strings with numbers or special characters", () => {
  expect(capitalise("123input")).toBe("123input");
  expect(capitalise("!input")).toBe("!input");
});
