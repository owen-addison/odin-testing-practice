import reverseString from "./reverseString";

// Empty String: What should the function return if given an empty string?
test("handles empty strings", () => {
  expect(reverseString("")).toBe("");
});

// String with Only One Character: This will test the function's behavior with minimal input.
test("handles only one character", () => {
  expect(reverseString("L")).toBe("L");
});

// String with Leading or Trailing Spaces: Ensure that spaces at the beginning or end of the string are correctly reversed.
test("handles leading spaces", () => {
  expect(reverseString("  reverse")).toBe("esrever  ");
});

// String with Multiple Spaces Between Words: Check how the function handles multiple consecutive spaces.
test("handles multiple spaces between word", () => {
  expect(reverseString("reverse  this  string")).toBe("gnirts  siht  esrever");
});

// String with Special Characters: Test strings that contain characters like !, @, #, $, %, etc. to ensure they are reversed correctly.
test("handles special characters", () => {
  expect(reverseString("this!")).toBe("!siht");
});

// String with Numbers: Ensure that strings containing numbers are reversed correctly.
test("handles numbers", () => {
  expect(reverseString("count123")).toBe("321tnuoc");
});

// String with Mixed Case: Test strings with a mix of uppercase and lowercase letters to ensure the case is preserved during reversal.
test("handles mixed case", () => {
  expect(reverseString("teSt")).toBe("tSet");
});
